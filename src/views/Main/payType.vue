<template>
    <div class="page-container">
        <!--工具栏-->
        <div style="float: left;padding-bottom: 10px">
            <el-button  size="mini" type="primary" @click="handleAdd" style="margin-right: 10px">新增</el-button>
        </div>
        <!--表格树内容栏-->
        <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column prop="timeName" label="名时效名称称"></el-table-column>
            <el-table-column prop="time" label="时效时常"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column label="是否有效">
                <template slot-scope="scope">
                    <el-switch @change="changeStatus(scope.row)" :value="scope.row.status == 0 ? true : false" active-color="#13ce66"
                               inactive-color="#ff4949"></el-switch>
                </template>
            </el-table-column>
            <el-table-column fixed="right"  width="185" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                    <span style="color:999999">&nbsp;|&nbsp; </span>
                    <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 新增修改界面 -->
        <el-dialog :title="type=='add' ? '新增' : '修改'" width="500px" :visible.sync="dialogVisible"
                   :close-on-click-modal="false">
            <el-form label-width="80px" size="small" style="text-align:left;">
                <!-- 菜单名称 -->
                <el-form-item label="时效名称">
                    <el-input v-model="dataForm.timeName" placeholder="例如：一个月,一个季度,半年"></el-input>
                </el-form-item>
                <el-form-item label="时效时常">
                    <el-input v-model="dataForm.time" type="number" placeholder="例如：10，单位（月）"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input v-model="dataForm.price" type="number" placeholder="价格"></el-input>
                </el-form-item>
                <el-form-item label="是否有效">
                    <el-radio-group v-model="dataForm.status">
                        <el-radio label="0">启用</el-radio>
                        <el-radio label="1">停用</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
                <el-button size="small" type="primary" @click="submitForm(type)">确认</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                loading: false,
                list:[],
                dataForm: {},
                type:'',
                dialogVisible:false
            };
        },
        mounted() {
            this.findTreeData();
        },
        methods: {
            // 获取数据
            findTreeData() {
                this.loading = true;
                this.$axios({
                    url:'/agingType/list?limit=99999',
                },100).then(res=>{
                    this.list = res.data.resultList;
                    this.loading = false;
                })
            },
            // 显示新增界面
            handleAdd() {
                this.type = 'add'
                this.dataForm = {}
                this.dialogVisible = true;
            },
            //改变状态
            changeStatus(row) {
                this.$axios({
                    url:'/agingType/updateStatus',
                    method:'put',
                    params:{
                        id:row.id,
                        status:row.status == '0' ? '1' : '0'
                    }
                },100).then(res=>{
                    this.$message.success('操作成功')
                    this.findTreeData();
                })
            },
            // 显示编辑界面
            handleEdit(row) {
                this.type = 'put'
                this.dataForm = {...row}
                this.dialogVisible = true;
            },
            // 删除
            handleDelete(item) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url:'/agingType/delete?id=' + item.id,
                        method:'delete'
                    },100).then(res=>{
                        this.$message.success('删除成功')
                        this.findTreeData();
                    })
                });
            },
            // 表单提交
            submitForm(type) {
                const url = type == 'put' ? '/agingType/update' : '/agingType/save';
                const method = type == 'put'? 'put':'post'
                this.$axios({
                    url,
                    method,
                    data:this.dataForm,
                },100).then(res=>{
                    this.dialogVisible = false;
                    this.$message.success('操作成功')
                    this.findTreeData();
                })
            }
        }
    };
</script>

