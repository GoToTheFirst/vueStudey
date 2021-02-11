<template>
  <div class="rigthConent">
    <ul>
      <li v-for="(item, index) in news" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        news: [{
            id: 1,
            title: 'news01'
          },
          {
            id: 2,
            title: 'news02'
          }, {
            id: 3,
            title: 'news03121'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
