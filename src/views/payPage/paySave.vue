<template>
    <div class="pay">
        <div class="header">充值帐号：<span>{{companyName}}</span></div>
        <div class="main">
            <div v-for="item in list" :key="item.id" :class="formData.typeId == item.id?'selected':''" class="card"
                      :shadow="formData.typeId == item.id?'always':'hover'">
                <div style="padding: 14px;" @click="changeCard(item)">
                    <span>{{item.timeName}}</span>
                    <div class="bottom clearfix">
                        <time class="time">¥{{ item.price }}</time>
                    </div>
                </div>
            </div>
        </div>
        <el-button type="primary" style="float: right;margin-top: 40px" @click="onSubmit">提交订单</el-button>
    </div>
</template>

<script>
    export default {
        name: 'paySave',
        data(){
            return{
                formData:{},
                list:[],
                companyName:sessionStorage.getItem('companyName')
            }
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
            changeCard(item){
                console.log(item);
                this.formData = {
                    price:item.price,
                    typeId:item.id,
                    typeTime:item.time
                }
            },
            onSubmit() {
                const params = {
                    companyId:sessionStorage.getItem('companyId'),
                    companyName:sessionStorage.getItem('companyName'),
                    flag:1,
                    ...this.formData
                }
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url:'/renew/toPay',
                        method:'post',
                        data:params
                    },100).then(res=>{
                        this.$message.success('操作成功')
                    })
                })
            }
        }
    };
</script>

<style scoped lang="scss">
.pay{
    width: 100%;
    margin: 40px auto;
    text-align: left;
    color: #666;
    .header{
        background: rgba(39, 176, 214, .15);
        padding: 30px;
        span{
            color: rgb(39, 176, 214);
        }
    }
    .main{
        margin-top: 50px;
        display: flex;
        .card{
            border: 2px solid #e2d9d9;
            border-radius: 8px;
            padding: 15px;
            margin-left: 20px;
            &:hover{
                cursor: pointer;
                color: rgb(39, 176, 214);
                border-color: #27b0d6;
            }
            &:nth-child(1){
                margin-left: 0;
            }
        }
        .selected {
            z-index: 3;
            border-color: #27b0d6;
            background: url(../../assets/success1.png) no-repeat;
            background-position: right bottom;
        }
    }
}
</style>