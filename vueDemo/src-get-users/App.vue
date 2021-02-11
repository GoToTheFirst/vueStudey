<template>
  <div id="">
    <search />
    <main-users />
  </div>
</template>

<script>
  import search from './components/search.vue'
  import mainUsers from './components/mainUsers.vue'
  export default {
    components: {
      search,
      mainUsers
    }
  }
</script>

<style>
  .search {
    margin: 0 auto;
    background-color: #808080;
    padding: 50px;
  }
</style>
