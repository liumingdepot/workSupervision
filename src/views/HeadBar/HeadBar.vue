<template>
    <div class="headbar">
        <!--导航-->
        <div class="item"><i class="el-icon-s-unfold"></i></div>
        <!--选择工程-->
        <el-popover placement="bottom" trigger="hover" class="select" v-if="users.userType == 0 || users.userType == 1 || users.userType == 5">
            <el-radio-group v-model="projectId" @change="porjectChange">
                <el-radio style="display: block;margin: 20px" v-for="item in projectList" :key="item.id" :name="item.id" :label="item.id">
                    {{ item.name }}
                </el-radio>
            </el-radio-group>
            <el-button class="sub" @click="submit" size="mini" type="primary">确认</el-button>
            <span class="btn" slot="reference">{{ $store.state.project.project.name || '请选择工程' }}</span>
        </el-popover>
        <!--user-->
        <div v-popover:popover-personal class="userInfo">
            <img class="avatar" :src="users.avatar || require('@/assets/user.png')" />
            <span>{{ users.companyName || '暂无' }}</span>
            <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
                <div class="personal-panel">
                    <div class="personal-desc" :style="{ background: this.$store.state.app.themeColor }">
                        <div class="avatar-container"><img class="avatar" :src="users.avatar || require('@/assets/user.png')" /></div>
                        <div class="name-role">
                            <span class="sender">{{ users.name }} - {{ USER[users.userType] }}</span>
                        </div>
                        <div class="registe-info">
                            <span class="registe-info">{{ users.companyName }}</span>
                        </div>
                    </div>
                    <div class="main-operation">
                        <el-button size="small" @click="goto('personal')" icon="fa fa-male">个人中心</el-button>
                        <el-button size="small" @click="goto('updatePhone')" icon="fa fa-key">更改手机号</el-button>
                    </div>
                    <div v-if="showPay" class="personal-footer" @click="goto('paySave')">缴费中心</div>
                    <div class="personal-footer" @click="logout">
                        <li class="fa fa-sign-out"></li>
                        退出登录
                    </div>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            companyName: '',
            projectList: [],
            projectId: sessionStorage.getItem('$projectId'),
            project: {},
            users: {},
            USER: [],
            obj: {},
            showPay:false
        };
    },
    async created() {
        this.personal();
        this.USER = await this.$tool.findDictByCode('USER');
    },
    computed: {
        ...mapState({
            porjectIds: state => state.project.project.projectId,
            collapse: state => state.app.collapse
        })
    },
    methods: {
        ...mapMutations(['onCollapse']),
        async personal() {
            const { data } = await this.$axios({
                url: '/personal/info'
            });
            if(data.userType == 1){
                this.showPay = true
            }
            //缓存数据
            if (data.userType == 5) {
                sessionStorage.setItem('userType', data.userType);
            } else {
                sessionStorage.setItem('companyName', data.companyName);
                sessionStorage.setItem('userType', data.userType);
                sessionStorage.setItem('id', data.id);
                sessionStorage.setItem('companyId', data.companyId);
            }
            if (data.userType == 4) {
                data.companyName = '系统管理员';
                data.avatar = '';
                this.users = data;
                return;
            }
            this.users = data;
            //判断是否完善资料
            if (data.isPerfect == 1) {
                this.$router.push('/personal');
                return;
            }

            //劳务承包商
            if (sessionStorage.getItem('userType') == '2') {
                return;
            }
            if (data.userType == 5) {
                this.$store.state.project.project.userType = data.userType;
                const ownerProject = await this.$api.project.ownerProject();
                this.projectList = ownerProject.data.resultList;
                return;
            }
            //获取工程列表
            const type = sessionStorage.getItem('userType') == '0' ? 'userId' : 'companyId';
            const result = await this.$api.project.list({
                [type]: sessionStorage.getItem('companyId'),
                limit: 999
            });
            this.projectList = result.data.resultList;
            /**
             * 只有一个工程
             */
            if (this.projectList.length == 1) {
                this.porjectChange(this.projectList[0].id);
                this.projectId = this.projectList[0].id;
            }
            if (result.data.resultList.length > 0) {
                this.obj = {};
                for (let val of result.data.resultList) {
                    this.obj[val.id] = val.status;
                }
            } else {
                this.$message.error('您现在暂无工程');
            }
        },

        porjectChange(projectId) {
            sessionStorage.setItem('$projectId', projectId);
            this.project = {};
            //根据工程获取区段
            const obj = {
                projectId,
                userType: 0
            };
            this.$api.controller.list(obj).then(res => {
                this.project = {
                    projectZoneId: res.data.resultList[0].id,
                    projectId: res.data.resultList[0].projectId,
                    name: res.data.resultList[0].name,
                    status: this.obj[projectId]
                };
                sessionStorage.setItem('project', JSON.stringify(this.project));
                this.$store.commit('changeProjet', this.project);
            });
        },
        //提交工程修改
        submit() {
            if (sessionStorage.getItem('userType') == 5) {
                this.projectList.forEach(item => {
                    if (item.id == this.project.projectId) {
                        sessionStorage.setItem('companyId', item.userId);
                    }
                });
            }
            this.$router.push('/');
            this.$message.success('修改成功');
            location.reload();
        },
        //个人中心
        goto(type) {
            this.$router.push({
                path: '/' + type,
                query: {
                    type: 'update'
                }
            });
        },
        // 退出登录
        logout() {
            this.$confirm('确认退出吗?', '提示', {
                type: 'warning'
            }).then(() => {
                this.$api.login.logout().then(res => {
                    sessionStorage.clear();
                    Cookies.remove('token');
                    this.$store.state.project.project = {};
                    this.$router.push('/login');
                    this.$message({
                        message: '退出成功',
                        type: 'success'
                    });
                });
            });
        }
    }
};
</script>

<style scoped lang="scss">
.headbar {
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    z-index: 1030;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 18px;

    .item {
        margin-left: 20px;
        font-size: 24px;
    }

    .select {
        border: 0px;
        outline: none;

        .btn {
            cursor: pointer;
        }
    }

    .userInfo {
        cursor: pointer;
        padding-right: 20px;
        display: flex;
        align-items: center;

        .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
}

.personal-panel {
    font-size: 14px;
    width: 280px;
    text-align: center;
    border-color: rgba(180, 190, 190, 0.2);
    border-width: 1px;
    border-style: solid;
    background: rgba(182, 172, 172, 0.1);
    margin: -14px;

    .personal-desc {
        padding: 15px;
        color: #fff;
    }

    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 90px;
        margin: 0 auto;
    }

    .main-operation {
        padding: 8px;
        margin-right: 1px;
        /* background: rgba(175, 182, 179, 0.3); */
        border-color: rgba(201, 206, 206, 0.2);
        border-top-width: 1px;
        border-top-style: solid;
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
        cursor: pointer;
    }
}
</style>
