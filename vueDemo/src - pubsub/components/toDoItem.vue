<template>
  <div id="toDoItem" :style="{background: bgColor}" @click="choose()" @mouseenter="isEnter(true)" @mouseleave="isEnter(false)">
    <input type="checkbox" v-model="item.isSuccess" />
    <span>{{index+1}}、{{item.title}}</span>
    <span style="float: right;">
      <button style="" v-show="isShow" @click="delItem">删除</button>
    </span>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    props: {
      item: Object,
      index: Number
      // delItemSignl: Function
    },
    data() {
      return {
        bgColor: '#ffffff',
        isShow: false
      }
    },
    methods: {
      isEnter(isen) {
        if (isen) {
          this.bgColor = '#aaaaaa'
          this.isShow = true
        } else {
          this.bgColor = '#ffffff'
          this.isShow = false
        }
      },
      delItem() {
        const {
          item,
          index
        } = this
        if (confirm(`确认删除${index + 1}---${item.title}吗？`)) {
          // this.delItemSignl(index)
          PubSub.publish('delItemSignl', index)
        }
      },
      choose() {
        const isSuccess = this.item.isSuccess
        this.item.isSuccess = !isSuccess
      }
    }
  }
</script>

<style>
</style>
