<template>
  <div id="toDohead">
    <input @keydown.enter="addItemFun()" v-model="input" style="width: 400px; height: 40px;" type="text" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script>
  export default {
    props: {
      addItem: Function
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
          this.addItem(input)
          this.input = ''
        }
      }
    }
  }
</script>

<style>
</style>
