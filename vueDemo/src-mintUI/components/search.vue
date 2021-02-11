<template>
  <div class="search">
    <h2>search github users</h2>
    <input type="search" placeholder="请输入用户名" v-model="searchName">
    <button type="button" @click="search">搜索</button>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data() {
      return {
        searchName: ''
      }
    },
    methods: {
      search() {
        const searchName = this.searchName.trim()
        // 若searchName不为空则发布
        if (searchName) {
          // 发布消息
          PubSub.publish('search', searchName)
        }
      }
    }
  }
</script>

<style>
  .search {
    margin: 0 auto;
    background-color: #808080;
    padding: 50px;
  }
</style>
