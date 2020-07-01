<template>
    <div class="personal-panel">
        <div class="personal-desc" :style="{ background: this.$store.state.app.themeColor }">
            <div class="avatar-container"><img class="avatar" :src="users.avatar || require('@/assets/user.png')"/></div>
            <div class="name-role">
                <span class="sender">{{ users.name }} - {{ USER[users.userType] }}</span>
            </div>
            <div class="registe-info">
                <span class="registe-info">{{ users.companyName  }}</span>
            </div>
        </div>
        <div class="main-operation">
            <el-button size="small" @click="goto('personal')" icon="fa fa-male">个人中心</el-button>
            <el-button size="small" @click="goto('password')" icon="fa fa-key">修改密码</el-button>
        </div>
        <div class="personal-footer" @click="logout">退出登录</div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        props: {
            users: {
                type: Object
            }
        },
        data(){
            return{
                USER:[]
            }
        },
        async created(){
            this.USER = await this.$tool.findDictByCode('USER')
        },
        methods: {
            goto(type) {
                this.$router.push({path: '/' + type, query: {type: 'update'}})
            },
            // 退出登录
            logout() {
                this.$confirm('确认退出吗?', '提示', {type: 'warning'}).then(() => {
                    sessionStorage.clear()
                    Cookies.remove('token');
                    this.$router.push('/login');
                    this.$api.login.logout().then(res => {
                        this.$message({message: '退出成功', type: 'success'})
                    });
                });
            }
        }
    }
    ;
</script>

<style scoped>
    .personal-panel {
        font-size: 14px;
        width: 280px;
        text-align: center;
        border-color: rgba(180, 190, 190, 0.2);
        border-width: 1px;
        border-style: solid;
        background: rgba(182, 172, 172, 0.1);
        margin: -14px;
    }

    .personal-desc {
        padding: 15px;
        color: #fff;
    }

    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 90px;
    }

    .name-role {
        font-size: 16px;
        padding: 5px;
    }

    .personal-relation {
        font-size: 16px;
        padding: 12px;
        margin-right: 1px;
        background: rgba(200, 209, 204, 0.3);
    }

    .relation-item {
        padding: 12px;
    }

    .relation-item:hover {
        cursor: pointer;
        color: rgb(19, 138, 156);
    }

    .main-operation {
        padding: 8px;
        margin-right: 1px;
        /* background: rgba(175, 182, 179, 0.3); */
        border-color: rgba(201, 206, 206, 0.2);
        border-top-width: 1px;
        border-top-style: solid;
    }

    .main-operation-item {
        margin: 15px;
    }

    .other-operation {
        padding: 15px;
        margin-right: 1px;
        text-align: left;
        border-color: rgba(180, 190, 190, 0.2);
        border-top-width: 1px;
        border-top-style: solid;
    }

    .other-operation-item {
        padding: 12px;
    }

    .other-operation-item:hover {
        cursor: pointer;
        background: #9e94941e;
        color: rgb(19, 138, 156);
    }

    .personal-footer {
        margin-right: 1px;
        font-size: 14px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-color: rgba(180, 190, 190, 0.2);
        border-top-width: 1px;
        border-top-style: solid;
    }

    .personal-footer:hover {
        cursor: pointer;
        color: rgb(19, 138, 156);
        background: #b1a6a61e;
    }
</style>
