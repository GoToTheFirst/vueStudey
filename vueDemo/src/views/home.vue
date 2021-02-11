<template>
  <div class="right">
    <div class="bar">
      <!-- <h2>子组件</h2> -->
      <span id="">
        <router-link to="/home/news">
          <h3>News</h3>
        </router-link>
      </span>
      <span id="">
        <router-link to="/home/messages?id=1">
          <h3>Message</h3>
        </router-link>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
  .right {
    /* float: right; */
    float: left;
    width: 380px;
    margin: 5px;
    /* background-color: green; */
  }

  .bar {
    width: auto;
    /* background-color: #7CFC00; */
    display: flex;
    justify-content: center;
    border-bottom: 1px #7FFFD4 solid;
  }

  .bar span {
    margin: 5px;
    padding: 5px;
    /* border: 1px #7FFFD4 solid; */
  }

  .bar a {
    text-decoration: none;
  }

  .bar span:hover {
    background-color: wheat;
  }

  .rigthConent {
    /* background-color: #7CFC00; */
    padding: 10px 25px;
  }

  .router-link-active {
    color: red;
  }
</style>
