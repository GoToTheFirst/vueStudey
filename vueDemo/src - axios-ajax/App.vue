<template>
  <div v-if="!name">loading....</div>
  <div v-else>查找结果如下， 库名： <a :href="url">{{name}}</a></div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        name: '',
        url: ''
      }
    },
    mounted() {
      // axios ajax请求处理
      const url =
        `https://api.github.com/search/repositories?q=v&sort=stars`
      axios.get(url).then(
        response => {
          // 成功了
          const res = response.data.items[0]
          this.name = res.name
          this.url = res.html_url
        }).catch(error => {
        console.log(error)
        alert('请求失败')
      })
    }
  }
</script>

<style>

</style>
