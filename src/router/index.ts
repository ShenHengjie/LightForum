/*
 * @Author: Jason Shen
 * @Date: 2023-06-21 14:13:18
 * @Description: 卷死别人！
 * @FilePath: \forum\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Item from '@/views/home/item/index.vue'
import User from '@/views/user/index.vue'
import Login from '@/views/user/login/index.vue'
import Register from '@/views/user/register/index.vue'
import Publish from '@/views/publish/publish.vue'
const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: 'item/:tid',
    //     name: 'Item',
    //     component: Item
    //   }
    // ]
  },
  {
    path: '/item/:tid',
    name: 'Item',
    component: Item
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/register',
    name: 'register',
    component: Register
  },{
    path: '/publish',
    name: 'publish',
    component: Publish
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
