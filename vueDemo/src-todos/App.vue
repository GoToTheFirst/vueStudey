<template>
  <div id="toDoContenter">
    <toDoHeader :addItem="addItem" />
    <toDoBody :toDoList="toDoList" :delItemSignl="delItemSignl" />
    <toDoFooter :toDoList="toDoList" :clearSuccessItem="clearSuccessItem" :checkAll="checkAll" />
  </div>
</template>

<script>
  // 1 引入组件
  // import HelloWorld from './components/HelloWorld.vue'
  import toDoHeader from './components/toDoHeader.vue'
  import toDoBody from './components/toDoBody.vue'
  import toDoFooter from './components/toDoFooter.vue'

  export default {
    // 2 映射组件
    components: {
      toDoHeader,
      toDoBody,
      toDoFooter
    },
    data() {
      return {
        toDoList: JSON.parse(window.localStorage.getItem('toDoList_key') || '[]')
      }
    },
    watch: {
      toDoList: {
        deep: true, // 深度监视
        handler: function(newValue) {
          window.localStorage.setItem('toDoList_key', JSON.stringify(newValue))
        }
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
        this.toDoList.forEach(todo => (todo.isSuccess = isChecked))
      }
    }
  }
</script>

<style>
  .logo {
    width: 200px;
  }
</style>
