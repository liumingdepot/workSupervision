<template>
    <div class="page-container">
        <!--表格树内容栏-->
        <el-table :data="list" row-key="id" size="mini" style="width: 100%;" v-loading="loading" element-loading-text="加载中"
                  :header-cell-style="$store.state.project.headerName">
            <el-table-column label="订单类型">
                <template slot-scope="scope">
                    <div :style="{color: scope.row.status==1?'#05cc88':'#fb4646'}">{{['待支付','已支付','已取消'][scope.row.status]}}</div>
                </template>
            </el-table-column>
            <el-table-column prop="companyName" label="单位名称"></el-table-column>
            <el-table-column prop="renewNo" label="订单号"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="renewDate" label="订单日期"></el-table-column>
            <el-table-column label="订单类型">
                <template slot-scope="scope">
                    {{['工程','时间'][scope.row.flag]}}
                </template>
            </el-table-column>
            <el-table-column fixed="right"  width="185" label="操作">
                <template slot-scope="scope">
                    <div v-if="scope.row.status == 0">
                        <el-button type="text" @click="handleEdit(scope.row)">确认支付</el-button>
                        <span style="color:999999">&nbsp;|&nbsp; </span>
                        <el-button type="text" @click="handleDelete(scope.row)">取消支付</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                loading: false,
                list:[]
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
                    url:'/renew/list?limit=99999',
                },100).then(res=>{
                    this.list = res.data.resultList;
                    this.loading = false;
                })
            },
            // 确认支付
            handleEdit(row) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url:'/renew/payed?renewNo=' + row.renewNo,
                        method:'put'
                    },100).then(res=>{
                        this.$message.success('删除成功')
                        this.findTreeData();
                    })
                })
            },
            // 取消支付
            handleDelete(item) {
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url:'/renew/cancel?renewNo=' + item.renewNo,
                        method:'put'
                    },100).then(res=>{
                        this.$message.success('删除成功')
                        this.findTreeData();
                    })
                });
            }
        }
    };
</script>

