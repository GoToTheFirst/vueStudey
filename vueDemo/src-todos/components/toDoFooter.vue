<template>
  <div id="toDoFooter">
    <div id="" style="float: left;margin-left: 20px;">
      <input type="checkbox" name="" v-model="isChecked" @click="allCheck" />
      <span id="" style="margin-left: 20px;">
        已完成{{succeed}}/全部{{allItem}}
      </span>
    </div>
    <div id="" style="float: right;">
      <button @click="clearSuccessItem()" v-show="succeed>0" type="button" style="height: 30px; background-color: #FF0000;">清除已经完成任务</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      toDoList: Array,
      clearSuccessItem: Function,
      checkAll: Function
    },
    computed: {
      succeed() {
        // const {
        //   toDoList
        // } = this
        // let count = 0
        // for (let i = 0; i < toDoList.length; i++) {
        //   if (toDoList[i].isSuccess) count++
        // }
        // return count
        return this.toDoList.reduce((preToDo, todo) => preToDo + (todo.isSuccess ? 1 : 0), 0)
      },
      allItem() {
        return this.toDoList.length
      }

    },
    data() {
      return {
        isChecked: false
      }
    },
    methods: {
      allCheck() {
        this.checkAll(this.isChecked)
      }
    }
  }
</script>

<style>
</style>
