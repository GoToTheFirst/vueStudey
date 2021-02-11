// 入口js : 创建vue实例 (注意大小写)
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 直接new Vue ESLint会报错 多一个空格都不行,娘耶
import router from './router'

// 配置对象的名称都是一些确定的名称, 不能随便修改
let vm = new Vue({
  el: '#app',
  // 映射组件, 注意components 别写错了
  components: {
    App
  },
  // 声明周期中会监测是否有 template 标签 有的话会渲染
  template: '<App/>',
  router
})
Vue.use({
  vm
})
