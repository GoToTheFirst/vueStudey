<template>
  <div id="toDoContenter">
    <!-- 给父组件绑定自定义监听 -->
    <!-- <toDoHeader  @addItem="addItem"/> -->
    <toDoHeader ref="header" />
    <toDoBody :toDoList="toDoList" />
    <!-- <toDoFooter :toDoList="toDoList" :clearSuccessItem="clearSuccessItem" :checkAll="checkAll" /> -->
    <toDoFooter>
      <input slot="checkbox" type="checkbox" name="" v-model="isChecked" @click="allCheck" />

      <span slot="slectAll" id="" style="margin-left: 20px;">
        已完成{{succeed}}/全部{{allItem}}
      </span>

      <div slot="btn" style="float: right;">
        <button @click="clearSuccessItem()" v-show="succeed>0" type="button" style="height: 30px; background-color: #FF0000;">清除已经完成任务</button>
      </div>
    </toDoFooter>
  </div>
</template>

<script>
  // 1 引入组件
  // import HelloWorld from './components/HelloWorld.vue'
  import toDoHeader from './components/toDoHeader.vue'
  import toDoBody from './components/toDoBody.vue'
  import toDoFooter from './components/toDoFooter.vue'
  // 引入pubsub-js
  import PubSub from 'pubsub-js'
  // 引入工具storageUtils
  import storageUtils from './Utils/storageUtils.js'

  export default {
    // 2 映射组件
    components: {
      toDoHeader,
      toDoBody,
      toDoFooter
    },

    data() {
      return {
        toDoList: storageUtils.get()
      }
    },

    computed: {
      succeed() {
        return this.toDoList.reduce((preToDo, todo) => preToDo + (todo.isSuccess ? 1 : 0), 0)
      },
      allItem() {
        return this.toDoList.length
      },

      isChecked: {
        // const {
        //   toDoList,
        //   succeed
        // } = this
        // console.log('ceshi')
        // if (toDoList.length === 0) return false
        // return toDoList.length === succeed
        get() {
          if (this.toDoList.length === 0) return false
          return this.toDoList.length === this.succeed
        },

        set(value) {
          this.checkAll(value)
        }
      }
    },

    watch: {
      toDoList: {
        deep: true, // 深度监视
        // handler: function(newValue) {
        //   window.localStorage.setItem('toDoList_key', JSON.stringify(newValue))
        // }
        // storageUtils.save 是一个函数对象。handler传入的就是一个函数对象
        handler: storageUtils.save
      }
    },

    methods: {
      // 添加方法
      addItem(title) {
        let item = {
          title: title,
          isSuccess: false
        }
        this.toDoList.unshift(item)
      },
      // 清除选中方法
      clearSuccessItem(isChecked) {
        const toDoList = this.toDoList
        for (let i = 0; i < toDoList.length; i++) {
          if (toDoList[i].isSuccess) {
            toDoList.splice(i, 1)
            i--
          }
        }
      },
      // 单个删除方法
      delItemSignl(index) {
        this.toDoList.splice(index, 1)
      },
      // 全选
      checkAll(isChecked) {
        console.log(isChecked)
        this.toDoList.forEach(todo => (todo.isSuccess = isChecked))
      },
      allCheck() {
        this.checkAll(this.isChecked)
      }
    },

    mounted() {
      console.log('调用$on')
      this.$refs.header.$on('addItem', this.addItem)
      // 回调函数用箭头函数 里面的this是大环境的this
      PubSub.subscribe('delItemSignl', (msg, data) => {
        this.delItemSignl(data)
      })
    }
  }
</script>

<style>
  .logo {
    width: 200px;
  }
</style>
