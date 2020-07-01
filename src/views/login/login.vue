<template>
    <!-- 登录页面 -->
    <div class="login">
        <h3 class="title">欢迎登录铁路施工影像采集平台</h3>
        <div class="radio">
            <div class="radioItem" @click="changeRadio('0')" :class="form.loginType == '0' ? 'action' : ''">手机登录</div>
            <div class="radioItem" @click="changeRadio('2')" :class="form.loginType == '2' ? 'action' : ''">账号登录</div>
        </div>
        <div class="form" v-if="form.loginType == '0'">
            <div class="formItem">
                <img src="../../assets/image/login/mobile.png" v-if="!form.mobile"/>
                <img src="../../assets/image/login/_mobile.png" v-if="form.mobile"/>
                <input type="text" class="input" v-model="form.mobile" placeholder="请输入手机号"/>
            </div>
            <div class="formItem">
                <img src="../../assets/image/login/vsCode.png" v-if="!form.vsCode"/>
                <img src="../../assets/image/login/_vsCode.png" v-if="form.vsCode"/>
                <input type="password" class="input" v-model="form.vsCode" placeholder="请输入验证码"/>
                <div class="btn" @click="changeMobile" v-if="!mobile">获取验证码</div>
                <div class="btn" v-if="mobile">{{ mobile }}</div>
            </div>
        </div>
        <div class="form" v-if="form.loginType == '2'">
            <div class="formItem">
                <img src="../../assets/image/login/userName.png" v-if="!form.userName"/>
                <img src="../../assets/image/login/_userName.png" v-if="form.userName"/>
                <input type="text" class="input" v-model="form.userName" placeholder="请输入账号"/>
            </div>
            <div class="formItem">
                <img src="../../assets/image/login/password.png" v-if="!form.password"/>
                <img src="../../assets/image/login/_password.png" v-if="form.password"/>
                <input type="password" class="input" v-model="form.password" placeholder="请输入密码"/>
            </div>
        </div>

        <div class="sub" :class="show ? 'subActive2' : 'subActive1'" @click="login(show)">登录</div>
        <div class="box">
            <div @click="setComponent('register')">注册账户</div>
            <div @click="setComponent('password')">找回密码</div>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import { mapState, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                mobile: 0,
                loading: false,
                form: {
                    loginType: '0',
                    mobile: '',
                    vsCode: '',
                    userName: '',
                    password: ''
                },
                dialogVisible: false,
                show: false
            };
        },
        updated() {
            this.wathForm();
        },
        methods: {
            ...mapMutations(['setComponent', 'menuRouteLoaded']),
            changeMobile() {
                this.$api.login
                    .sendSms({
                        mobile: this.form.mobile,
                        type: '2'
                    })
                    .then(res => {
                        if (!res) {
                            return;
                        }
                        this.mobile = 60;
                        let dateInterval = setInterval(() => {
                            if (this.mobile <= 0) {
                                this.mobile = 0;
                                clearInterval(dateInterval);
                            } else {
                                this.mobile--;
                            }
                        }, 1000);
                    });
            },
            //切换登陆方式
            changeRadio(e) {
                this.form = {};
                this.form.loginType = e;
            },
            //监听表单
            wathForm() {
                if (this.form.loginType == '0') {
                    if (this.form.mobile && this.form.vsCode) {
                        this.show = true;
                    } else {
                        this.show = false;
                    }
                }
                if (this.form.loginType == '2') {
                    if (this.form.userName && this.form.password) {
                        this.show = true;
                    } else {
                        this.show = false;
                    }
                }
            },
            //登录
            login(show) {
                if (!show) {
                    return;
                }
                this.$api.login.login(this.form).then(res => {
                    Cookies.set('token', res.data.token);
                }).then(res => {
                    return this.$api.login.menuList();
                }).then(res => {
                    const menuList = JSON.stringify(this.$tool.tree(res.data));
                    sessionStorage.setItem('menu', menuList); //sessionStorage 储存菜单
                }).then(res => {
                    this.$router.push('/'); // 登录成功，跳转到主页
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .login {
        position: relative;
        top: 62px;
        left: 470px;
        width: 340px;
        padding-right: 20px;

        .title {
            font-size: 24px;
            font-weight: bold;
            line-height: 46px;
            text-align: left;
        }

        .radio {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: rgb(21, 134, 252);
            border-bottom: 1px solid rgb(229, 229, 229);

            .radioItem {
                font-size: 16px;
                margin-right: 40px;
                line-height: 30px;
                cursor: pointer;
            }

            .action {
                border-bottom: 1px solid rgb(21, 134, 252);
            }
        }

        .form {
            margin-top: 10px;

            .formItem {
                margin-top: 20px;
                height: 40px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid rgb(229, 229, 229);

                img {
                    width: 20px;
                    height: 20px;
                    padding-right: 20px;
                }

                .input {
                    border: 0px;
                    font-size: 16px;
                    outline: none;
                    color: rgba(153, 153, 153, 1);
                }

                .btn {
                    width: 90px;
                    height: 32px;
                    background: rgba(21, 134, 252, 1);
                    border-radius: 4px;
                    color: #fff;
                    font-size: 14px;
                    line-height: 32px;
                    cursor: pointer;
                }
            }
        }

        .sub {
            margin-top: 20px;
            width: 330px;
            height: 40px;
            border-radius: 4px;
            font-size: 16px;
            line-height: 40px;
            cursor: pointer;
        }

        .subActive1 {
            background: rgb(242, 242, 242);
            color: rgb(153, 153, 153);
        }

        .subActive2 {
            background: rgb(21, 134, 252);
            color: #ffffff;
        }

        .box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 36px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 36px;
            cursor: pointer;
        }
    }
</style>
