// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Messages from '../views/messages.vue'
import News from '../views/news.vue'
import MessageDetail from '../views/messageDetail.vue'
Vue.use(VueRouter)

export default new VueRouter({
  // 路由配置
  routes: [{
    path: '/home',
    component: Home,
    children: [{
        path: '/home/news',
        component: News
      },
      {
        // 简化写法
        path: 'messages',
        component: Messages,
        children: [{
          // parame方法
          // path: '/home/messages/:id',
          // query方法
          path: '/home/messages',
          component: MessageDetail
        }]
      },
      {
        // 可以直接为空表示为当前默认路径
        path: '',
        redirect: '/home/news'
      }
    ]
  }, {
    path: '/about',
    component: About
  }, {
    path: '/',
    redirect: '/home'
  }]
})
