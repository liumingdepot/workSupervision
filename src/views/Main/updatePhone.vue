<template>
  <div class="updataPhopne">
    <div class="form">
      <div class="formItem">
        <img src="../../assets/image/login/mobile.png" v-if="!form.mobile">
        <img src="../../assets/image/login/_mobile.png" v-if="form.mobile">
        <input type="text" class="input" v-model="form.mobile" placeholder="请输入新手机号"></input>
      </div>
      <div class="formItem">
        <img src="../../assets/image/login/vsCode.png" v-if="!form.vsCode">
        <img src="../../assets/image/login/_vsCode.png" v-if="form.vsCode">
        <input type="text" class="input" v-model="form.vsCode" placeholder="请输入验证码"></input>
        <div class="btn" @click="changeMobile" v-if="!mobile">获取验证码</div>
        <div class="btn" v-if="mobile">{{mobile}}</div>
      </div>
      <div class="sub" :class="show?'subActive2':'subActive1'" @click="updataPhopne">确认</div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  export default {
    data() {
      return {
        form: {
          mobile: "",
          vsCode: ""
        },
        mobile: 0,
        show: false
      }
    },
    methods: {
      changeMobile() {
        this.$api.login.sendSms({
          mobile: this.form.mobile,
          type: '3'
        }).then(res => {
          if (!res) {
            return
          }
          this.mobile = 60;
          this.show = true
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
      updataPhopne() {
        if(!this.show){
          return
        }
        this.$axios({
          url: '/login/modifyMobile',
          method: 'put',
          params: {
            ...this.form,
            id:sessionStorage.getItem('id')
          }
        }).then(res => {
          console.log(res);
          if(res.code != 200){
            return
          }
          this.$api.login.logout().then(res => {
            sessionStorage.clear()
            Cookies.remove('token');
            this.$store.state.project.project = {}
            this.$router.push('/login');
          });
          this.$message({
            message: '操作成功',
            type: 'success'
          });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .updataPhopne {
    background-color: #fff;
    margin-top: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

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
  }
</style>
