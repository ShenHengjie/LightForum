<!--
 * @Author: Jason Shen
 * @Date: 2023-06-21 15:35:32
 * @Description: 卷死别人！
 * @FilePath: \forum\src\components\Tabbar.vue
-->
<template>
  <div class="box">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
        <div class="flex-grow" />
        <img src="@/assets/vue.svg" alt="" srcset="">
        <div class="flex-grow1" />
        <el-menu-item class="menu-item" index="1">主页</el-menu-item>
        <el-menu-item class="menu-item" index="2">内容</el-menu-item>
        <el-menu-item class="menu-item" index="3">关于</el-menu-item>
        <el-menu-item class="menu-item" index="4">发布</el-menu-item>
        <div class="flex-grow2" />
        <el-menu-item class="menu-item elm-5" v-show="isLogin">
            <img src="http://47.99.34.48:9000/fourm/fourm_1687336831623_2023-06-21_640.png" alt="" srcset="">
        </el-menu-item>
        <el-menu-item class="menu-item elm-5" v-show="isLogin" @click="loginout">
            退出登录
        </el-menu-item>
        <el-menu-item class="menu-item" index="5" v-show="!isLogin">登录</el-menu-item>
        <el-menu-item class="menu-item" index="6" v-show="!isLogin">注册</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const activeIndex = ref('1');
const routeuser = ref(["/","/item","/about","/publish","/login","/register"]);
const isLogin = ref(false);
// console.log(localStorage.getItem("email"));
if(localStorage.getItem("email") !== null){
    isLogin.value = true
}
// console.log(window.location.pathname.split("/")[1]);
const pathurl = "/" + window.location.pathname.split("/")[1];
routeuser.value.forEach((element: any,index: number) => {
    // console.log(element,index);
    if(pathurl == element){
        activeIndex.value = (index+1).toString();
    }
});
const loginout = () => {
    localStorage.removeItem("email");
    window.location.reload()
}
const handleSelect = (key: number) => {
    // console.log(key, keyPath)
    // console.log(routeuser.value[key-1]);
    router.push(routeuser.value[key-1])
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    // height: 80px;
    background-color: rgb(238, 255, 232);
    .el-menu-demo {
        height: 60px;
    }
    .flex-grow {
        flex-grow: 0.2;
    }
    .flex-grow1 {
        flex-grow: 0.05;
    }
    .flex-grow2 {
        flex-grow: 0.65;
    }
    .menu-item {
        width: 120px;
    }
}
.elm-5 {
    img {
        height: 50px;
        width: 50px;
    }
}
</style>