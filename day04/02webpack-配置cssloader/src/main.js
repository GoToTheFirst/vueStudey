// commenJS导入方式
const {
	add,
	mul
} = require('./mathUtil.js')
console.log(add(20, 30))

// es6导入方式
import {
	name,
	age,
	height
} from './info.js'
console.log(name)
console.log(age)
console.log(height)

require('./testCssloader.css')
