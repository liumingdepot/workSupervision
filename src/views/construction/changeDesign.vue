<!--设计变更-->
<template>
    <div>
        <!--表格树内容栏-->
        <el-table :data="designAuditData" row-key="id"  size="mini"  v-loading="loading" element-loading-text="加载中"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" label="序号" align="center"/>
            <el-table-column prop="projectZoneName"  label="工程名称"/>
            <el-table-column  label="状态">
                <template slot-scope="scope">
                    {{ ['未提交','待审核','审核中' ,'审核通过','审核驳回'][scope.row.status || status] }}
                </template>
            </el-table-column>
            <el-table-column prop="name"  label="标题"/>
            <el-table-column prop="content"  label="变更内容"/>
            <el-table-column prop="uploadByName"  label="提交人"/>
            <!-- 图片 -->
            <el-table-column  label="说明">
                <template slot-scope="scope">
                    <el-image :src="scope.row.pathStr" @click="playImg(scope.row.pathStr)" fit="cover" style="height: 30px"></el-image>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="查看" width="1000px" height="600px" :visible.sync="dialogVisible2" :close-on-click-modal="false">
            <el-image v-if="imgUrl" :src="imgUrl"></el-image>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: 0,
                loading: false,
                designAuditData: [],
                dialogVisible: false,
                dialogVisible2: false,
                filters: {
                    name: ''
                },
                rules: '',
                dataForm: {
                    id: '',
                    name: '',
                    content: ''
                },
                options:[],
                imgUrl:''
            }
        },
        created() {
            this.findTreeData()
        },
        computed:{
            projectZoneId(){
                return this.$store.state.project.project.projectZoneId
            }
        },
        methods: {
            findTreeData() {
                this.loading = true;
                this.$api.designAudit.list({
                    projectZoneId:this.projectZoneId
                }).then(res => {
                    this.designAuditData = res.data.resultList
                    this.loading = false;
                })
            },
            playImg(url) {
                this.imgUrl = url
                this.dialogVisible2 = true
            }
        }
    }
</script>
