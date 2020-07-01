<template>
    <!-- 字典管理 -->
    <div class="page-container">
        <!--工具栏-->
        <el-button size="mini" type="primary" @click="handleAdd" style="float:left;margin-bottom: 20px;">新增</el-button>
        <!--表格树内容栏-->
        <el-table :data="list" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中。。。"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column type="index" width="50" label="序号"></el-table-column>
            <el-table-column prop="type" label="专业名称"></el-table-column>
            <!-- 状态 -->
            <el-table-column label="字典状态">
                <template slot-scope="scope">
                    <el-switch @change="changeStatus(scope.row)" :value="scope.row.status == 0 ? true : false"
                               active-color="#08D59C" inactive-color="#b5b5b5">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="sort" sortable label="字典排序"></el-table-column>
            <el-table-column prop="updateDate" sortable label="更新时间"></el-table-column>
            <!-- 操作 -->
            <el-table-column fixed="right" width="185" :label="$t('action.operation')">
                <template slot-scope="scope">
                    <el-button type="text" size="mini" @click="handleEat(scope.row)">编辑</el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 新增修改界面 -->
        <el-dialog :title="dialogVisibleType==1?'新增':'修改'" width="500px" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <el-form @keyup.enter.native="submitForm()" label-width="80px" size="small" style="text-align:left;">
                <!-- 上级菜单 -->
                <el-form-item label="专业名称">
                    <el-input v-model="type" placeholder="类别名称"></el-input>
                </el-form-item>
                <!-- 排序 -->
                <el-form-item label="排序">
                    <el-input v-model="sort" placeholder="排序"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
			<el-button size="small" @click="dialogVisible = false">取消</el-button>
			<el-button size="small" v-if="dialogVisibleType==1" type="primary" @click="submitForm">新增</el-button>
            <el-button size="small" v-if="dialogVisibleType==2" type="primary" @click="submitForm2">修改</el-button>
		</span>
        </el-dialog>
    </div>
</template>

<script>
    import KtButton from '@/views/Core/KtButton';
    import TableTreeColumn from '@/views/Core/TableTreeColumn';
    import PopupTreeInput from '@/components/PopupTreeInput';
    import FaIconTooltip from '@/components/FaIconTooltip';

    export default {
        components: {
            PopupTreeInput,
            KtButton,
            TableTreeColumn,
            FaIconTooltip
        },
        data() {
            return {
                active: '',
                tree: [],
                loading: false,
                list: [],
                dialogVisible: false,
                dialogVisibleType:1,
                type: '',
                sort: '',
                id:"",
                dataRule: {},

            };
        },
        computed: {
            projectId() {
                return this.$store.state.project.project.projectId
            }
        },
        mounted() {
            this.changeTree()
        },
        methods: {
            // 获取数据
            changeTree() {
                this.list = []
                this.loading = true;
                this.$api.event.list({
                    limit: 999,
                    projectId: this.projectId,
                    companyId: sessionStorage.getItem('companyId')
                }).then(res => {
                    const list = res.data.resultList;
                    if (list.length == 0) {
                        this.loading = false;
                        return
                    }
                    list.forEach(val => {
                        val.updateDate = new Date(val.updateDate).toLocaleDateString()
                    })
                    this.list = this.$tool.tree(list)
                    this.loading = false;
                });
            },
            //修改状态
            changeStatus(e) {
                let data = {}
                data.id = e.id
                data.status = e.status == '0' ? '1' : '0'
                this.$api.event.updateStatus(data).then(res => {
                    if (res.code == 200) {
                        this.changeTree(this.projectId);
                    }
                })
            },
            // 显示新增界面
            handleAdd() {
                this.type = ''
                this.sort = ''
                this.dialogVisible = true;
                this.dialogVisibleType = 1;
            },
            handleEat(row){
                this.id = row.id
                this.type = row.type;
                this.sort = row.sort;
                this.dialogVisible = true;
                this.dialogVisibleType = 2;
            },
            // 删除
            handleDelete(row) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$api.event.del({
                        id: row.id
                    }).then(res => {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        if (this.list.length == 1) {
                            this.list = []
                        }
                        this.changeTree(this.projectId);
                    });
                });
            },
            // 表单提交
            submitForm() {
                this.$api.event.save({
                    companyId: sessionStorage.getItem('companyId'),
                    parentId: '0',
                    sort: this.sort,
                    type: this.type,
                    projectId: this.projectId
                }).then(res => {
                    this.dialogVisible = false;
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    });
                    this.changeTree(this.projectId);
                })
            },
            submitForm2(){
                this.$api.event.update({
                    companyId: sessionStorage.getItem('companyId'),
                    parentId: '0',
                    sort: this.sort,
                    type: this.type,
                    id:this.id,
                    projectId: this.projectId
                }).then(res => {
                    this.dialogVisible = false;
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    });
                    this.changeTree(this.projectId);
                })
            }
        }
    };
</script>
