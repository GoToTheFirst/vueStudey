<template>
  <div>
    <ul>
      <li>
        id: {{msgDetail.id}}
      </li>
      <li>
        title: {{msgDetail.title}}
      </li>
      <li>
        detail: {{msgDetail.detali}}
      </li>
    </ul>
  </div>
</template>

<script>
  const allMsgs = [{
      id: 1,
      title: '0001',
      detali: 'msg001 conent......'
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
  export default {
    data() {
      return {
        msgDetail: {},
        allMsgsDetail: []
      }
    },
    mounted() {
      // 传过来的id可能是个文本，*1后变为数字
      // query方法传数据
      // const id = ((Object.keys(this.$route.query).length === 0) ? 0 : this.$route.query.id) * 1
      let id = 0
      if (Object.keys(this.$route.query).length !== 0) {
        id = this.$route.query.id * 1
        console.log('执行了初始化。。。。')
      }
      console.log(id)
      // params方法传数据
      // const id = this.$route.params.id * 1
      this.allMsgsDetail = allMsgs
      this.msgDetail = this.allMsgsDetail.find((msg) => msg.id === id)
    },
    watch: {
      $route: function(value) {
        // const id = value.params.id * 1
        // this.msgDetail = this.allMsgsDetail.find((msg) => msg.id === id)

        // const id = this.$route.query.id * 1
        // const id = ((Object.keys(this.$route.query).length === 0) ? 0 : this.$route.query.id) * 1
        let id = 0
        if (Object.keys(this.$route.query).length !== 0) {
          id = this.$route.query.id * 1
          console.log('执行了watch。。。。')
        }
        // console.log(this.$route.query.id)
        console.log(id)
        this.msgDetail = this.allMsgsDetail.find((msg) => msg.id === id)
      }
    }
    // 页面更新前执行
    // beforeUpdate() {
    //   // const id = this.$route.params.id * 1
    //   // this.msgDetail = this.allMsgsDetail.find((msg) => msg.id === id)
    //   const id = this.$route.query.id * 1
    //   console.log(id)
    //   this.msgDetail = this.allMsgsDetail.find((msg) => msg.id === id)
    // }
  }
</script>

<style>
</style>
