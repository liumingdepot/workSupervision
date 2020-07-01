<template>
    <div style="margin-top: -25px">
        <div style="display: flex;align-items: flex-end;justify-content: space-between">
            <!-- 菜单 -->
            <el-menu default-active="0" mode="horizontal" @select="getTreeData" style="float: left;margin-bottom: 20px;border:none">
                <el-menu-item index="0" style="height: 50px;padding: 0;margin-right: 26px">监理单位</el-menu-item>
                <el-menu-item index="1" style="height: 50px;padding: 0;margin-right: 26px">施工单位</el-menu-item>
            </el-menu>
            <el-button type="primary" size="mini" style="margin-bottom: 18px" v-if="$store.state.project.userType != 5" @click="ziliao">新增</el-button>
        </div>
        <!--表格树内容栏-->
        <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。" :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column label="文件资料">
                <template slot-scope="scope">
                    <span class="name" slot="reference" @click="openUrl(scope.row.filePathStr)">文件资料</span>
                </template>
            </el-table-column>
            <el-table-column prop="createDate" label="创建时间"></el-table-column>
            <el-table-column prop="remarks" label="说明"></el-table-column>
            <!-- 操作 -->
            <el-table-column fixed="right" width="185" label="操作" v-if="type == '0' && $store.state.project.userType != 5">
                <template slot-scope="scope">
                    <el-button size="mini" type="text" @click="del(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 新增修改界面 -->
        <el-dialog title="新增" width="400px" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <el-form label-width="100px" size="small" style="text-align:left;">
                <el-form-item label="名称">
                    <el-input v-model="dataForm.name" placeholder="请提交监理计划、细则"></el-input>
                </el-form-item>
                <el-form-item label="资料上传">
                    <el-upload :action="global.baseUrlMetro + '/uploadFile/upload'" :headers="headers" :on-success="success">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="说明">
                    <el-input v-model="dataForm.remarks" placeholder="请提交说明"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" type="primary" @click="submitForm">新增</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
    data() {
        return {
            type: '0',
            list: [],
            loading: false,
            dialogVisible: false,
            dataForm: {
                name: '监理计划、细则'
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
        this.type = 0
    },
    methods: {
        ziliao() {
            this.dataForm = {
                name: '监理计划、细则',
                filePath: ''
            }
            this.dialogVisible = true
        },
        //获取菜单树tree
        getTreeData(type) {
            this.loading = true
            this.type = type
            if (type == 1) {
                this.$axios(
                    {
                        url: '/documentDatum/list',
                        method: 'get',
                        params: {
                            limit: 999,
                            projectId: this.projectId
                        }
                    },
                    true
                ).then(res => {
                    const list = []
                    res.data.resultList.forEach(item => {
                        item.createDate = new Date(item.createDate).toLocaleDateString()
                        if (item.companyId != sessionStorage.getItem('companyId')) {
                            list.push(item)
                        }
                    })
                    this.list = list
                    this.loading = false
                })
            } else {
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
                    this.list = res.data.resultList.map(item => {
                        item.createDate = new Date(item.createDate).toLocaleDateString()
                        return item
                    })
                    this.loading = false
                })
            }
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
