<template>
  <div class="content">
    <div class="header">
      <h2>router Basic -01</h2>
    </div>
    <div id="body">
      <div class="left">
        <ul>
          <li>
            <router-link class="link" to="/home">Home</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
      <div>
        <keep-alive>
          <!-- 属性传递参数， 也可以通过路由链接传递数据 -->
          <router-view msg_view="router-view传递的参数"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .content {
    width: 600px;
    margin: 0 auto;
    background-color: lawngreen;
  }

  .header {
    width: 100%;
    height: 50px;
    background-color: #e7e7e7;
  }

  .left {
    float: left;
    width: 200px;
    margin: 5px;
    /* background-color: #FF0000; */
  }

  .left ul {
    list-style: none;
  }

  .left li {
    width: 100px;
    margin: 3px;
    height: 30px;
    font-size: 20px;
    background-color: aquamarine;
  }

  .link {
    text-decoration: none;
  }
</style>
