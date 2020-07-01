<template>
  <!--签证管理-->
  <div class="page-container">
    <!--表格树内容栏-->
    <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="$t('action.loading')"
      :header-cell-style="$store.state.project.headerName">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column prop="projectName" label="工程名称"></el-table-column>
      <el-table-column prop="title" label="签证名称"></el-table-column>
      <el-table-column prop="companyName" label="公司名称"></el-table-column>
      <el-table-column prop="count" label="类型">
        <template slot-scope="scope">
          {{ CONSTRUCTION[scope.row.type] }}
        </template>
      </el-table-column>
      <el-table-column label="查看影像">
        <template slot-scope="scope">
          <el-image style="width: 30px;" fit="contain" :src="scope.row.pathStr.split(',')[0]" :preview-src-list="scope.row.pathStr.split(',')"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="location" label="地点"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="remarks" label="说明"></el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <div style="color: green;" v-if="scope.row.status==3">审核通过</div>
          <div style="color: red" v-if="scope.row.status==4">审核驳回</div>
          <div style="color: #000000;" v-else>{{['未提交','待审核','审核中'][scope.row.status]}}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <!-- 0：未提交 1：待审核 2：审核中 3：审核通过 4：审核驳回 -->
          <el-button @click="changeDialogVisible(scope.row)" type="text"
                     v-if="$store.state.project.userType != 5 && (scope.row.status==1 || scope.row.status==4)">审核</el-button>
          <el-button @click="changeDialogVisible(scope.row)" type="text"
                     v-if="$store.state.project.userType == 5 && scope.row.status==2">审核</el-button>
          <el-button @click="changeDialogVisible2(scope.row.id)" type="text">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" small @current-change="handleCurrentChange" :current-page="page.pageNo"
      :page-sizes="page.limits" hide-on-single-page :page-size="page.limit" layout="total, prev, pager, next, jumper"
      :total="page.totalNumber" />

    <el-dialog title="填写意见" :visible.sync="dialogVisible" width="30%">
      <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="item.newContent"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="$store.state.project.userType != 5" @click="changeStatus(2)" type="primary">通过</el-button>
        <el-button v-if="$store.state.project.userType == 5" @click="changeStatus(3)" type="primary">通过</el-button>
        <el-button @click="changeStatus(4)" type="warning">驳回</el-button>
      </span>
    </el-dialog>

    <el-dialog title="填写意见" :visible.sync="dialogVisible2" width="60%">
      <el-table :data="list2" row-key="id" size="mini" v-loading="loading" :header-cell-style="$store.state.project.headerName">
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="auditByName" abel="操作人"></el-table-column>
        <el-table-column prop="auditDateStr" label="操作时间"></el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <div style="color: green;" v-if="scope.row.status==3">审核通过</div>
            <div style="color: red" v-if="scope.row.status==4">审核驳回</div>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="说明"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        filters: {
          projectZoneId: '',
        },
        options: [],
        list: [],
        imgUrl: '',
        dialogVisible: false,
        dialogVisible2: false,
        page: {
          limit: 12,
          pageNo: 1,
          pageSize: 10,
          totalNumber: 0
        },
        dataForm: {
          id: '',
          status: ''
        },
        item: {
          id: "",
          title: "",
          newContent: '',
        },
        list2:[],
        CONSTRUCTION: []
      };
    },
    computed: {
      project() {
        return this.$store.state.project.project
      }
    },
    async created() {
      this.findTreeData();
      this.CONSTRUCTION = await this.$tool.findDictByCode('CONSTRUCTION')
    },
    methods: {
      //翻页
      handleCurrentChange(pageNo) {
        this.page.pageNo = pageNo;
        this.findTreeData()
      },
      changeDialogVisible2(visaId) {
        this.$axios({
          url: '/visaAudit/findListByVisaId',
          method: 'get',
          params: {
            visaId
          }
        }, true).then(res => {
          this.list2 = res.data
          this.dialogVisible2 = true
        })
      },
      changeDialogVisible(item) {
        this.item = item
        this.item = item
        this.dialogVisible = true
      },
      changeStatus(status) {
        this.$axios({
          url: '/visaAudit/audit',
          method: 'put',
          data: {
            visaId: this.item.id,
            status,
            content: this.item.newContent,
            auditBy: sessionStorage.getItem("companyId"),
            title: this.item.title
          }
        }, true).then(res => {
          if (res.code == 200) {
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            this.dialogVisible = false
            this.findTreeData();
          }
        })
      },
      // 获取数据
      findTreeData() {
        this.loading = true;
        let params = {
          limit: this.page.limit,
          pageNo: this.page.pageNo,
          projectZoneId: this.project.projectZoneId
        };
        this.$api.visa.list(params).then(res => {
          this.list = res.data.resultList
          this.page.totalNumber = res.data.totalNumber
          this.loading = false;
        });
      }
    }
  };
</script>

<style scoped>
  .pagination {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
