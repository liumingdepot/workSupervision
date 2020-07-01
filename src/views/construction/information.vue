<template>
    <div>
        <el-button type="primary" size="mini" style="float: left;margin-bottom: 20px" @click="ziliao">新增</el-button>
        <!--表格树内容栏-->
        <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。" :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column label="文件资料" show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button type="text" @click="openUrl(scope.row.filePathStr)">文件资料</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="createDateStr" label="创建时间"></el-table-column>
            <el-table-column prop="remarks" label="说明"></el-table-column>
            <!-- 操作 -->
            <el-table-column fixed="right" width="185" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="text" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 新增修改界面 -->
        <el-dialog title="新增" width="400px" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <el-form label-width="70px" size="small" label-position="left">
                <el-form-item label="资料类型">
                    <el-input v-model="dataForm.name" placeholder="请填写资料类型"></el-input>
                </el-form-item>
                <el-form-item label="资料上传">
                    <el-upload :action="global.baseUrlMetro + '/uploadFile/upload'" :headers="headers" :on-success="success" style="float: left">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="说明">
                    <el-input v-model="dataForm.remarks" placeholder="请提交说明"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" type="primary" @click="submitForm">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
    data() {
        return {
            list: [],
            loading: false,
            dialogVisible: false,
            name: '',
            dataForm: {
                name: ''
            },
            headers: {
                Authorization: ''
            }
        }
    },
    computed: {
        projectId() {
            return this.$store.state.project.project.projectId
        }
    },
    created() {
        this.headers.Authorization = Cookies.get('token')
        this.getTreeData()
    },
    methods: {
        ziliao() {
            this.dataForm = {
                name: '',
                filePath: ''
            }
            this.dialogVisible = true
        },
        //获取菜单树tree
        getTreeData() {
            this.loading = true
            this.$axios(
                {
                    url: '/documentDatum/list',
                    method: 'get',
                    params: {
                        limit: 999,
                        projectId: this.projectId,
                        companyId: sessionStorage.getItem('companyId')
                    }
                },
                true
            ).then(res => {
                console.log(res.data.resultList)
                this.list = res.data.resultList
                this.loading = false
            })
        },
        //上传成功
        success(response, file) {
            this.dataForm.filePath = response.data.fileUrl
        },
        //跳转url
        openUrl(url) {
            location.href = url
        },
        //删除
        del({ id }) {
            this.$axios(
                {
                    url: '/documentDatum/delete',
                    method: 'delete',
                    params: { id }
                },
                true
            ).then(res => {
                this.$message.success('操作成功')
                this.getTreeData()
            })
        },
        // 提交
        submitForm() {
            console.log(this.dataForm)
            if (!this.dataForm.filePath) {
                this.$message.error('请上传文件')
                return
            }
            const dataForm = {
                name: this.dataForm.name,
                filePath: this.dataForm.filePath,
                remarks: this.dataForm.remarks,
                projectId: this.projectId,
                projectName: this.name,
                companyId: sessionStorage.getItem('companyId')
            }
            this.$axios(
                {
                    url: '/documentDatum/save',
                    method: 'post',
                    data: dataForm
                },
                true
            ).then(res => {
                this.$message.success('操作成功')
                this.dialogVisible = false
                this.getTreeData()
            })
        }
    }
}
</script>

<style scoped>
.name {
    color: #129ef5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    cursor: pointer;
}
</style>
