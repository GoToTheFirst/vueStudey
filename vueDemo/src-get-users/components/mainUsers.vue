<template>
  <h2 v-if="firsrView">请输入用户名</h2>
  <h2 v-else-if="loading">LOADING...</h2>
  <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
  <div v-else class="mainUsers">
    <div class="item" v-for="(user, index) in users" :key="index">
      <a :href="user.url"><img :src="user.pngUrl" alt="头像加载失败"></a>
      <p style="text-align: center;">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data() {
      return {
        firsrView: true,
        loading: false,
        users: null, // [{url: '', name: '', pngUrl: ''}]
        errorMsg: ''
      }
    },
    mounted() {
      PubSub.subscribe('search', (msg, searchName) => {
        const url = `https://api.github.com/search/users?q=${searchName}`
        // 更新请求中状态
        this.firsrView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''

        axios.get(url).then(response => {
          const res = response.data
          const users = res.items.map(item => ({
            pngUrl: item.avatar_url,
            url: item.html_url,
            name: item.login
          }))
          // 更新成功状态
          this.loading = false
          console.log(users)
          this.users = users
        }).catch(errors => {
          // 更新失败状态
          this.loading = false
          this.errorMsg = errors
        })
      })
    }
  }
</script>

<style>
  .item {
    float: left;
    width: 200px;
    height: 250px;
    padding: 5px;
    border: 1px #808080 solid;
    /* margin: 5px 5px; */
    /* background-color: #FF0000; */
  }

  .item img {
    width: 200px;
  }

  .mainUsers {
    padding: 20px;
  }
</style>
