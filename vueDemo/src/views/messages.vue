<template>
  <div class="rigthConent">
    <ul>
      <!-- <li v-for="(msg) in msgs" :key="msg.id">{{(msg.title)}}</li> -->
      <li v-for="(msg) in msgs" :key="msg.id">
        <router-link :to="`/home/messages?id=${msg.id}`">{{msg.title}}</router-link>
        <button @click="pushShow(msg.id)">push查看</button>
        <button @click="replaceShow(msg.id)">replace查看</button>
      </li>
    </ul>
    <hr>
    <button @click="backBtn">回退</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msgs: [{
            id: 1,
            title: '0001',
            detali: 'msg001'
          },
          {
            id: 2,
            title: '0002',
            detali: 'msg002'
          },
          {
            id: 5,
            title: '0005',
            detali: 'msg00'
          }
        ]
      }
    },
    methods: {
      pushShow(id) {
        console.log('pushShow')
        this.$router.push(`/home/messages?id=${id}`)
      },
      replaceShow(id) {
        console.log('测试replaceShow')
        this.$router.replace(`/home/messages?id=${id}`)
      },
      backBtn() {
        this.$router.back()
      }
    }
  }
</script>

<style>
  .router-link-exact-active {
    color: red !important;
  }

  a {
    text-decoration: none;
    color: -internal-root-color;
  }

  .router-link-active {
    color: blueviolet;
  }
</style>
