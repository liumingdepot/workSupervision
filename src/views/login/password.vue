<template>
    <!-- 找回密码页面 -->
    <div class="login">
        <h3 class="title">忘记密码</h3>
        <div class="form">
            <div class="formItem">
                <img src="../../assets/image/login/mobile.png" v-if="!form.mobile">
                <img src="../../assets/image/login/_mobile.png" v-if="form.mobile">
                <input type="text" class="input" v-model="form.mobile" placeholder="请输入手机号"/>
            </div>
            <div class="formItem">
                <img src="../../assets/image/login/vsCode.png" v-if="!form.vsCode">
                <img src="../../assets/image/login/_vsCode.png" v-if="form.vsCode">
                <input type="password" class="input" v-model="form.vsCode" placeholder="请输入验证码"/>
                <div class="btn" @click="changeMobile" v-if="!mobile">获取验证码</div>
                <div class="btn" v-if="mobile">{{mobile}}</div>
            </div>
            <div class="formItem">
                <img src="../../assets/image/login/vsCode.png" v-if="!form.newPassword">
                <img src="../../assets/image/login/_vsCode.png" v-if="form.newPassword">
                <input type="password" class="input" v-model="form.newPassword" placeholder="请输入新密码"/>
            </div>
        </div>
        <div class="sub" :class="show?'subActive2':'subActive1'" @click="getRegister(show)">确认修改</div>
        <div class="box">
            <div @click="setComponent('login')">返回登录</div>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import {mapMutations} from 'vuex';

    export default {
        name: 'Login',
        data() {
            return {
                mobile: 0,
                form: {
                    mobile: '',
                    vsCode:'',
                    newPassword: ''
                },
                show:false
            };
        },
        updated(){
            this.wathForm()
        },
        methods: {
            ...mapMutations(['setComponent']),
            //监听表单
            wathForm(){
                if(this.form.mobile && this.form.vsCode && this.form.newPassword){
                    this.show = true
                }else{
                    this.show = false
                }
            },
            //获取手机验证码
            changeMobile() {
                this.$api.login.sendSms({
                    mobile: this.form.mobile,
                    type: '1'
                }).then(res => {
                    if(!res){
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
            //修改
            getRegister(show) {
                if(!show){
                    return
                }
                this.$api.login.retrievePwd(this.form).then(res=>{
                    this.setComponent('login');
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    .login {
        position: relative;
        top: 62px;
        left: 470px;
        width: 330px;

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
                    margin-right: 20px;
                }

                .input {
                    border: 0px;
                    font-size:16px;
                    outline: none;
                    color:rgba(153,153,153,1);
                }
                .btn{
                    width:90px;
                    height:32px;
                    background:rgba(21,134,252,1);
                    border-radius:4px;
                    color: #fff;
                    font-size:14px;
                    line-height: 32px;
                    cursor: pointer;
                }
            }
        }
        .sub{
            margin-top: 20px;
            width: 330px;
            height:40px;
            border-radius:4px;
            font-size:16px;
            line-height:40px;
            cursor: pointer;
        }
        .subActive1{
            background:rgb(242,242,242);
            color:rgb(153,153,153);
        }
        .subActive2{
            background:rgb(21,134,252);
            color:#ffffff;
        }
        .box{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 36px;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:36px;
            cursor: pointer;
        }
    }
</style>
