<!--设计变更-->
<template>
    <div class="page-container">
        <!--表格树内容栏-->
        <el-table :data="designAuditData" row-key="id" style="width: 100%" v-loading="loading" element-loading-text="加载中。。。"
                  :header-cell-style="$store.state.project.headerName" size="mini">
            <el-table-column type="index" label="序号" align="center"/>
            <el-table-column  label="状态">
                <template slot-scope="scope">
                    {{ ['未提交','待审核','审核中' ,'审核通过','审核驳回'][scope.row.status || status] }}
                </template>
            </el-table-column>
            <el-table-column prop="content" label="变更内容"/>
            <el-table-column prop="uploadByName" label="提交人"/>
            <!-- 图片 -->
            <el-table-column  label="查看图片">
                <template slot-scope="scope">
                    <el-image style="width: 30px;display: flex;align-items: center" :src="scope.row.pathStr.split(',')[0]" :preview-src-list="scope.row.pathStr.split(',')"></el-image>
                </template>
            </el-table-column>
            <el-table-column prop="remarks" label="说明"/>
            <!-- 操作 -->
            <el-table-column fixed="right" width="185" label="操作" v-if="$store.state.project.userType != 5">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.row)">审核</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 新增修改界面 -->
        <el-dialog title="审核" width="500px" :visible.sync="dialogVisible"
                   :close-on-click-modal="false">
            <el-form @keyup.enter.native="submitForm()"
                     label-width="100px" size="small" style="text-align:left;">
                <el-form-item label="审核内容">
                    <el-input type="textarea" :rows="5" v-model="dataForm.content" placeholder="审核内容"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button size="small" @click="dialogVisible = false">取消</el-button>
                    <el-button size="small" type="primary" @click="submitForm(true)">审核通过</el-button>
                    <el-button size="small" type="danger" @click="submitForm(false)">审核驳回</el-button>
                </span>
        </el-dialog>

        <el-dialog title="查看" width="1000px" height="600px" :visible.sync="dialogVisible2" :close-on-click-modal="false">
            <el-image v-if="imgUrl" :src="imgUrl"></el-image>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                designAuditData:[],
                dialogVisible:false,
                dialogVisible2:false,
                imgUrl:'',
                dataForm:{
                    content:''
                }
            }
        },
        computed:{
            project(){
                return this.$store.state.project.project
            }
        },
        created() {
            this.findTreeData()
        },
        methods: {
            findTreeData() {
                this.loading = true;
                this.$api.designAudit.list({
                    projectZoneId:this.project.projectZoneId
                }).then(res => {
                    this.designAuditData = res.data.resultList
                    this.loading = false;
                })
            },
            // 显示审核界面
            handleEdit(row) {
                this.dataForm.designId = row.id
                this.dataForm.designTitle = row.content
                this.dialogVisible = true;
            },
            playImg(url) {
                this.imgUrl = url
                this.dialogVisible2 = true
            },
            // 表单提交
            submitForm(type) {
                let dataForm = this.dataForm
                dataForm.auditBy = sessionStorage.getItem("id")
                if (type) {
                    dataForm.status = '3'
                } else {
                    dataForm.status = '4'
                    if (!dataForm.content) {
                        this.$message({message: '请填写审核内容', type: 'error'});
                        return
                    }
                }
                this.$api.designAudit.audit(dataForm).then(res => {
                    this.$message({message: '操作成功', type: 'success'});
                    this.findTreeData()
                });
            }
        }
    }
</script>
