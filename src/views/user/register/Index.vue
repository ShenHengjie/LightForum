<!--
 * @Author: Jason Shen
 * @Date: 2023-06-21 22:29:36
 * @Description: 卷死别人！
 * @FilePath: \forum\src\views\user\register\Index.vue
-->
<template>
  <div class="box">
    <div class="login_div">
      <p class="title">欢迎注册</p>
      <br>
      <el-input class="el-input" :prefix-icon="User" size="large" v-model="username" placeholder="请输入用户名" />
      <br>
      <el-input class="el-input" :prefix-icon="Phone" size="large" v-model="phone" placeholder="请输入手机号" />
      <br>
      <el-input class="el-input" :prefix-icon="Lock" size="large" type="password" show-password v-model="password" placeholder="请输入密码" />
      <br>
      <el-input class="el-input" :prefix-icon="Lock" size="large" type="password" show-password v-model="repassword" placeholder="请重复密码" />
      <!-- <br>
      <el-input class="el-input" :prefix-icon="Message" size="large" v-model="username" placeholder="请输入用户名" /> -->
      <br>
      <el-input class="el-input" :prefix-icon="Message" size="large" v-model="email" placeholder="请输入邮箱">
        <template #append>
          <!-- <button @click.prevent="getCode()"  class="code-btn" :disabled="!show">
                  <span v-show="show">获取验证码</span>
                  <span v-show="!show" class="count">{{count}} s</span>
          </button> -->
          <el-button @click="getCode" :disabled="!show">
            <span v-show="show">获取验证码</span>
            <span v-show="!show" class="count">{{count}} s</span>
          </el-button>
        </template>
      </el-input>
      <br>
      <el-input class="el-input" :prefix-icon="Star" size="large" v-model="code" placeholder="请输入验证码" />
      <div style="margin-top: 20px;">
        <el-button class="el-button1" type="primary" size="large" @click="register">注册</el-button>
      </div>
      <div style="height: 50px;">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Message, Lock, Phone, User, Star } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { Register, sendCode } from '@/api/user';
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref('');
const password = ref('');
const username = ref('');
const phone = ref('');
const repassword = ref('');
const code = ref('');
const show = ref(true);
const count = ref(0);
const timer: any = ref(undefined)
const getCode = () => {
  console.log(email.value);
  sendCode(email.value).then((res) => {
    console.log(res);
    if(res.code == "200" && res.data !== "已经存在用户") {
      if (!timer.value) {
        ElMessage({
          message: '验证码发送成功',
          type: 'success',
        })
        count.value = 60;
        show.value = false;
        timer.value = setInterval(() => {
          if (count.value > 0 && count.value <= 60) {
            count.value--;
          } else {
            show.value = true;
            clearInterval(timer.value);
            timer.value = null;
          }
        }, 1000);
      }
    }
    if(res.code == "200" && res.data == "已经存在用户") {
        ElMessage.error('用户已存在');
    }
  })
};
const register = () => {
  Register(
    {
      "uname": username.value,
      "passward": password.value,
      "email": email.value,
      "avatar": "http://47.99.34.48:9000/fourm/fourm_1687336831623_2023-06-21_640.png",
      "phone" : phone.value,
      "usex" : "1",
      "codes" :  code.value
    }
  ).then((res: any) => {
    console.log(res);
    if(res.code == "200" && res.data == "注册成功") {
      ElMessage({
        message: '注册成功',
        type: 'success',
      })
      setInterval(() => {
        router.push("/login");
      },1500)
    }
  })
};
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
    width: 40%;
    // height: 60%;
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
    .el-button1 {
      width: 400px;
      margin: 5px;
    }
  }
}

.code-btn {
  width: 100px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 222;
  color: #ef8466;
  font-size: 14px;
  border: none;
  border-left: 1px solid #bababa;
  padding-left: 10px;
  background-color: #fff;
  cursor: pointer;
}
</style>