<!--
 * @Author: Jason Shen
 * @Date: 2023-06-21 22:29:30
 * @Description: 卷死别人！
 * @FilePath: \forum\src\views\user\login\Index.vue
-->
<template>
  <div class="box">
    <div class="login_div">
      <p class="title">欢迎登录</p>
      <br>
      <el-input class="el-input" :prefix-icon="Message" size="large" v-model="email" placeholder="请输入邮箱" />
      <br>
      <el-input class="el-input" :prefix-icon="Lock" size="large" type="password" show-password v-model="password" placeholder="请输入密码" />
      <br>
      <div style="margin-top: 20px;">
        <el-button class="el-button"  type="primary" size="large" @click="login">登录</el-button>
        <el-button class="el-button" type="primary" size="large" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Message,Lock } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { Login } from '@/api/user';
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref('');
const password = ref('');
const login = () => {
  Login({
    em: email.value,
    pass: password.value
  }).then((res: any) => {
    if(res.code == "200" && res.data == "密码错误"){
      ElMessage.error('登录失败,请检查账号密码!');
    }
    else if(res.code == "200" && res.data == "密码正确"){
      ElMessage({
        message: '登录成功',
        type: 'success',
      });
      
      localStorage.setItem("email",email.value);
      router.push("/")
      setInterval(() => {
        window.location.reload();
      },500);
    }
    else{
      ElMessage.error('登录失败,请检查网络设置');
    }
  })
}
const register = () => {
  router.push("/register");
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #e9e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_div {
    position: relative;
    top: -100px;
    width: 600px;
    height: 400px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .title {
      display: inline-block;
      margin-top: 50px;
      font-size: 40px;
      font-weight: bold;
      border-bottom: #012c6d solid 5px;
      margin-bottom: 40px;
    }
    .el-input {
      // display: inline-block;
      width: 400px;
      margin: 5px;
    }
    .el-button {
      width: 400px;
      margin: 5px;
    }
  }
}
</style>