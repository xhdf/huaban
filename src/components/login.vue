
<template>
 <transition name="fade">
    <div class="login">
        <div class="header">
            <span class="icon fa fa-times" @click="goback"></span>
            <span>登录</span>
        </div>
        <div class="title">账号登录</div>
        <div class="input-wrap"><input type="text" v-model="message"
                placeholder="邮箱/手机号"></div>
        <div class="input-wrap"><input type="password"  v-model="password"
                placeholder="密码"></div>
        <div class="input-wrap button" @click="login"><input type="button"
                value="登录"></div>
        <div class="prompt">
            <span>忘记密码?</span>
            <span>手机注册</span>
        </div>
    </div>
 </transition>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            message:'',
            password:''
        }
    },
    methods: {
        goback() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        },
        login(){
            if(this.message&&this.password){
                MessageBox('提示', '无此用户');
            }else{
                MessageBox('提示', '登录失败');
            }
        }
    }
}
</script>

<style lang="scss" scoped>


.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 20px;
  background: #fff;
  .header {
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 18px;
    .icon {
      margin-right: 20px;
      font-size: 18px;
    }
  }
  .title {
    height: 60px;
    line-height: 60px;
    color: #cdcdcd;
  }
  .input-wrap {
    input {
      width: 100%;
      height: 44px;
      margin: 10px 0;
      text-indent: 10px;
      border: none;
      border-radius: 5px;
      background: #f2f2f2;
      &::-webkit-input-placeholder {
        color: #c3c3c3;
      }
    }
  }
  .button {
    input {
      color: #fff;
      background: #e50834;
    }
  }
  .prompt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    margin: 0 5px;
  }
}
</style>
