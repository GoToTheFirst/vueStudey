// 直接导出
export let num = 20
export let name = 'xiaoming'

function sum(num1, num2) {
	return num1 + num2
}
// ES6下关键字class创建类
class Person {
	run() {
		console.log('run启动,开始奔跑')
	}
}
// 集中导入
export {
	sum,
	Person
}

// 默认导出,export default只能出现一个,引入时自己起名字
let age = 20
// export default age
function fun(arg) {
	console.log(arg)
}
let gender = 'men'
export default fun
// export default gender
