<template>
  <div class="right">
    <h3>About</h3>
    <p>{{msg_view}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    props: {
      msg_view: String,
      msg_link: String
    }
  }
</script>

<style>
  .right {
    /* float: right; */
    float: left;
    width: 380px;
    margin: 5px;
    /* background-color: green; */
  }

  .router-link-active {
    color: red;
  }
</style>
