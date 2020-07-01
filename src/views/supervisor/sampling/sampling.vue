<template>
  <div style="margin-top: -25px">
    <!-- 菜单 -->
    <el-menu default-active="0" mode="horizontal" @select="getTreeData"
             style="float: left;margin-bottom: 20px;border:none">
      <el-menu-item index="0" style="height: 50px;padding: 0;margin-right: 26px">材料抽检</el-menu-item>
      <el-menu-item index="1" style="height: 50px;padding: 0;margin-right: 26px">工程抽检</el-menu-item>
    </el-menu>
    <!--表格树内容栏-->
    <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading"
              element-loading-text="加载中" :header-cell-style="$store.state.project.headerName">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column label="抽检内容">
        <template slot-scope="scope">
          <el-tooltip class="item" :content="scope.row.content" placement="bottom" effect="light">
            <span class="name">{{ scope.row.content}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="userName" label="抽检人"></el-table-column>
      <el-table-column prop="finish" label="施工进度" v-if="type=='1'"></el-table-column>
      <el-table-column prop="cost" label="抽检进度" v-if="type=='1'"></el-table-column>
      <el-table-column label="查看影像">
        <template slot-scope="scope">
          <div style="display: flex;align-items: center">
            <el-image style="width: 30px;display: flex;align-items: center;margin-right: 10px" fit="contain"
                      :src="scope.row.path[0]" :preview-src-list="scope.row.path"></el-image>
            <el-button type="text" v-if="scope.row.video" @click="playVideo(scope.row.videoStr)">查看视频</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="createDate" label="创建时间"></el-table-column>
      <el-table-column prop="remarks" label="说明"></el-table-column>
    </el-table>
    <el-pagination class="pagination" small @current-change="handleCurrentChange" :current-page="page.pageNo"
                   :page-sizes="page.limits"
                   hide-on-single-page :page-size="page.limit" layout="total, prev, pager, next, jumper"
                   :total="page.totalNumber"/>

    <el-dialog title="查看" width="1000px" center :visible.sync="dialogVisible" :close-on-click-modal="false">
      <video width="900" height="600" controls autoplay :src="videoUrl"></video>
    </el-dialog>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                type: '0',
                loading: false,
                list: [],
                page: {
                    limit: 12,
                    pageNo: 1,
                    pageSize: 10,
                    totalNumber: 0
                },
                videoUrl: '',
                dialogVisible: false
            }
        },
        computed: {
            project() {
                return this.$store.state.project.project
            }
        },
        created() {
            this.getTreeData();
        },
        methods: {
            //翻页
            handleCurrentChange(pageNo) {
                this.page.pageNo = pageNo;
                this.initLoadData()
            },
            //图片 视频 播放
            playVideo(url) {
                this.videoUrl = url
                this.dialogVisible = true
            },
            //获取菜单树tree
            getTreeData(e) {
                this.type = e
                this.loading = true;
                this.$api.sampling.list({
                    limit: this.page.limit,
                    pageNo: this.page.pageNo,
                    type: this.type,
                    projectZoneId: this.project.projectZoneId
                }).then(res => {
                    const list = res.data.resultList
                    list.forEach(val => {
                        if (val.path.includes(',')) {
                            val.path = val.pathStr.split(',')
                        } else {
                            val.path = [val.pathStr]
                        }
                        console.log(val);
                        val.createDate = new Date(val.createDate).toLocaleDateString()
                    })
                    this.list = list
                    this.page.totalNumber = res.data.totalNumber
                    this.loading = false;
                });
            },
        }
    }
</script>

<style scoped>
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    cursor: pointer;
  }

  .pagination {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
