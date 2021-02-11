<template>
  <div id="toDoBody" style="margin: 10px 0;">
    <toDoItem v-for="(item, index) in toDoList" :key="index" :item="item" :index="index" />
  </div>
</template>

<script>
  import toDoItem from './toDoItem.vue'

  export default {
    props: {
      toDoList: Array
      // delItemSignl: Function
    },
    components: {
      toDoItem
    }

  }
</script>

<style>
</style>
