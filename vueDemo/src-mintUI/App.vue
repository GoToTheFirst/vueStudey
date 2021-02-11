<template>
  <div>
    <mt-button type="primary" size="large" @click.native="testClick">这是测试</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button>
      <img src="../build/logo.png" height="20" width="20" slot="icon">
      带自定义图标
    </mt-button>
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  export default {
    methods: {
      testClick() {
        // Toast('提示信息')
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        })
      }
    }
  }
</script>

<style>
</style>
