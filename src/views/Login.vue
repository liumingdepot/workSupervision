<template>
    <div class="common">
       <div class="main">
           <keep-alive>
               <component :is="getComponent"></component>
           </keep-alive>
           <div class="img">
               <img src="/static/app.png">
               <div class="title">下载 APP</div>
               <div class="container">使用手机上的任意二维码扫描软件，扫描上方二维码，下载手机app。</div>
           </div>
       </div>
    </div>
</template>

<script>
    import login from './login/login'; //登录
    import password from './login/password'; //忘记密码
    import register from './login/register'; //注册
    import {mapGetters} from 'vuex';

    export default {
        components: {
            login,
            password,
            register
        },
        computed: {
            ...mapGetters(['getComponent'])
        }
    }
</script>

<style scoped lang="scss">
.common{
    width: 100%;
    height: 100%;
    background: url('../assets/image/bg.png') no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .main{
        width: 1040px;
        height: 530px;
        background: #ffffff;
        background: url('../assets/image/bg1.png') no-repeat;
        background-size: 1040px;
        box-shadow:0px 18px 60px 0px rgba(59,124,215,0.51);
        border-radius:26px;
        position: relative;
        .img{
            border-left: 1px solid #e5e5e5;
            position: absolute;
            top: 120px;
            right: 20px;
            width: 200px;
            font-size: 14px;
            .title{
                text-align: center;
                padding:  10px 0;
                font-size: 16px;
            }
            .container{
                width: 160px;
                margin: 0 auto;
                text-align: left;
                color: #999;
            }
            img{
                width: 160px;
            }
        }
    }
}
</style>
