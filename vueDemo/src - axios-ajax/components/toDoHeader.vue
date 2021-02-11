<template>
  <div id="toDohead">
    <input @keydown.enter="addItemFun()" v-model="input" style="width: 400px; height: 40px;" type="text" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script>
  export default {
    props: {
      // addItem: Function
    },
    data() {
      return {
        input: ''
      }
    },
    methods: {
      addItemFun() {
        const input = this.input.trim()
        if (input === '') {
          alert('输入框不能为空')
        } else {
          // this.addItem(input)
          // 触发自定义事件addItem 并传入input数据
          console.log('触发事件,并$emit。。。。')
          this.$emit('addItem', input)
          this.input = ''
        }
      }
    }
  }
</script>

<style>
</style>
