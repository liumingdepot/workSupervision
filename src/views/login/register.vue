<template>
    <!-- 登录页面 -->
    <div class="login">
        <h3 class="title">欢迎注册铁路施工影像采集平台</h3>
        <div class="radio">
            <div class="radioItem" @click="changeRadio('0')" :class="form.loginType == '0'?'action':''">手机注册</div>
            <div class="radioItem" @click="changeRadio('2')" :class="form.loginType == '2'?'action':''">账号注册</div>
        </div>
        <div class="form" v-if="form.loginType == '0'">
            <div class="formItem">
                <img src="../../assets/image/login/mobile.png" v-if="!form.mobile">
                <img src="../../assets/image/login/_mobile.png" v-if="form.mobile">
                <input type="text" class="input"  v-model="form.mobile" placeholder="请输入手机号"></input>
            </div>
            <div class="formItem">
                <img src="../../assets/image/login/vsCode.png" v-if="!form.vsCode">
                <img src="../../assets/image/login/_vsCode.png" v-if="form.vsCode">
                <input type="password" class="input" v-model="form.vsCode" placeholder="请输入验证码"></input>
                <div class="btn" @click="changeMobile" v-if="!mobile">获取验证码</div>
                <div class="btn" v-if="mobile">{{mobile}}</div>
            </div>
        </div>
        <div class="form" v-if="form.loginType == '2'">
            <div class="formItem">
                <img src="../../assets/image/login/userName.png" v-if="!form.userName">
                <img src="../../assets/image/login/_userName.png" v-if="form.userName">
                <input type="text" class="input" v-model="form.userName" placeholder="请输入账号"></input>
            </div>
            <div class="formItem">
                <img src="../../assets/image/login/password.png" v-if="!form.password">
                <img src="../../assets/image/login/_password.png" v-if="form.password">
                <input type="password" class="input" v-model="form.password" placeholder="请输入密码"></input>
            </div>
        </div>
        <div style="margin-top: 10px;text-align: left">
            <el-checkbox v-model="checked" label="我已阅读并同意"></el-checkbox>
            <span style="font-size: 14px;margin: 0;text-align: left;cursor: pointer;color: #1586FC" @click="gotoword(1)">《铁路项目施工影像采集平台网络服务使用协议》</span>
            &<span style="font-size: 14px;margin: 0;color: #1586FC;cursor: pointer" @click="gotoword(2)">《隐私政策》</span>
        </div>
        <div class="sub" :class="show && checked?'subActive2':'subActive1'" @click="getRegister(show&&checked)">注册</div>
        <div class="box">
            <div @click="setComponent('login')">返回登录</div>
        </div>

        <el-dialog :title="type == 1?'服务使用协议':'隐私政策'" :visible.sync="dialogVisible" width="50%">
            <v-word :type="type"></v-word>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import {mapMutations} from 'vuex';
    import vWord from './word';

    export default {
        components: {vWord},
        data() {
            return {
                mobile: 0,
                loading: false,
                form: {
                    loginType: 0,
                    mobile: '',
                    email: '',
                    userName: '',
                    password: ''
                },
                type: 1,
                dialogVisible: false,
                show: false,
                checked: true
            };
        },
        updated() {
            this.wathForm()
        },
        methods: {
            ...mapMutations(['setComponent', 'menuRouteLoaded']),
            //切换登陆方式
            changeRadio(e) {
                this.form = {}
                this.form.loginType = e
            },
            gotoword(type) {
                this.dialogVisible = true
                this.type = type
            },
            //监听表单
            wathForm() {
                if (this.form.loginType == '0') {
                    if (this.form.mobile && this.form.vsCode) {
                        this.show = true
                    } else {
                        this.show = false
                    }
                }
                if (this.form.loginType == '2') {
                    if (this.form.userName && this.form.password) {
                        this.show = true
                    } else {
                        this.show = false
                    }
                }
            },
            //获取手机or邮箱验证码
            changeMobile() {
                this.$api.login.sendSms({
                    mobile: this.form.mobile,
                    type: '1'
                }).then(res => {
                    if (!res) {
                        return
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
                })
            },
            //注册
            getRegister(show) {
                if (!show) {
                    if(!this.checked){
                      this.$message.error('请阅读《服务使用协议》 《隐私政策》')
                    }
                    return
                }
                this.$api.login.register({
                    ...this.form,
                    visit:0
                }).then(res => {
                    Cookies.set('token', res.token); // 放置token到Cookie
                    this.$router.push({path: '/', query: {type: 'save'}})
                    this.setComponent('login');
                    this.loading = false;
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

        .title {
            font-size: 24px;
            font-weight: bold;
            text-align: left;
            line-height: 46px;
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
                    margin-right: 20px;
                }

                .input {
                    border: 0px;
                    font-size: 16px;
                    color: rgba(153, 153, 153, 1);
                    outline: none;
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
            justify-content: center;
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
