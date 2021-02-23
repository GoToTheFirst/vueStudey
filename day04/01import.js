// 导入常量
import {
	name,
	num
} from './01export.js'

console.log(name)
console.log(num)

// 导入函数和类
import {
	sum,
	Person
} from './01export.js'
console.log(sum(1, 12))
let p = new Person
p.run()

// 导入default
import def from './01export.js'
console.log(def)
def('你好!')

// 全部导入,访问时用all的属性
import * as all from './01export.js'
console.log(all.name)
console.log(all.num)
