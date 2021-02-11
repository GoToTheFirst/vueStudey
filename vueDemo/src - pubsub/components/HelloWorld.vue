<template>
  <div>
    <p class="test">{{msg}}</p>
  </div>
</template>

<script>
  // 默认向外暴露对象
  export default { // 配置对象与vue一致
    data() { // 必须写函数
      return {
        msg: '这是我第一个vue项目'
      }
    }
  }
</script>

<style>
  .test {
    color: red;
    font-size: 30px;
  }
</style>
