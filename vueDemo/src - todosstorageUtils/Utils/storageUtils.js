// 向外暴露内容
export default {
  save(toDoList) {
    window.localStorage.setItem('toDoList_key', JSON.stringify(toDoList))
  },
  get() {
    return JSON.parse(window.localStorage.getItem('toDoList_key') || '[]')
  }
}
