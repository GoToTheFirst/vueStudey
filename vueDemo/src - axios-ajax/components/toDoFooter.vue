<template>
  <div id="toDoFooter">
    <div id="" style="float: left;margin-left: 20px;">
      <!-- <input type="checkbox" name="" v-model="isChecked" @click="allCheck" /> -->
      <slot name="checkbox"></slot>
      <!-- <span id="" style="margin-left: 20px;">
        已完成{{succeed}}/全部{{allItem}}
      </span> -->
      <slot name="slectAll"></slot>
    </div>
    <!-- <div id="" style="float: right;">
      <button @click="clearSuccessItem()" v-show="succeed>0" type="button" style="height: 30px; background-color: #FF0000;">清除已经完成任务</button>
    </div> -->
    <slot name="btn"></slot>
  </div>
</template>

<script>
  export default {
    computed: {
      succeed() {
        return this.toDoList.reduce((preToDo, todo) => preToDo + (todo.isSuccess ? 1 : 0), 0)
      },
      allItem() {
        return this.toDoList.length
      },
      isChecked() {
        // const {
        //   toDoList,
        //   succeed
        // } = this
        // console.log('ceshi')
        // if (toDoList.length === 0) return false
        // return toDoList.length === succeed
        
      }

    },
    data() {
      return {
        // isChecked: false
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
