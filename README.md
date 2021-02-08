# vueStudy
### day01
#### 1、
	(1)MVVM 
		M model : 模型数据对象（data） 
		V view : 视图 模板页面
		VM viewModel :  视图模型 （vue实例 即 var vm = new vue()）
	(2)绑定数据 实时更新
		<input type="text" v-model="message"/>
		<p>hello??? {{message}}</p>
#### 1、vue语法介绍
	(1)基本语法： {{内写js代码}}
		<p>{{msg}}</p>	
	(2)强制数据绑定 v-bind:src=""
		<img v-bind:src="imgURL">
		<img :src="imgURL"> 简写方式
	(3)强制事件绑定 传参可以是js变量名，函数必须写在methods:{}里面
		<button type="button" v-on:click="test">强制事件绑定</button>
		<button type="button" @click="test">强制事件绑定简写</button>
		<button type="button" @click="test1(msg)">强制事件绑定-传参</button>
#### 3、计算属性
	(1)computed 放入方法，在页面中使用{{方法名}}来显示计算结果
		computed: {
			fullName1() {
				return this.firstName + " " + this.lastName
			}
		}
	(2)watch 监视属性 用watch配置属性，或者用vm.$watch配置
		watch: {
			// 监视第一个值是否发生变化，发生变化则执行下面函数
			firstName: function(value) { // value是变化过的新值
				// computed watch 中的this都是指 Vue
				this.fullName2 = value + ' ' + this.lastName
			}
		}
	(3)setter getter方法 
		getter方法在需要读取函数内的值时执行 多次读取执行一次，其他在缓存中读取
		setter方法在内容变化时调用
		// 回调函数
		fullName3: {
			// 当需要读取函数内部的值时执行
			get() {
				console.log('get')
				return this.firstName + ' ' + this.lastName
			},
			set(value) {
				console.log('set')
				let names = value.split(' ')
				this.firstName = names[0]
				this.lastName = names[1]
			}
		}
#### 4、class style绑定改变样式
	(1)class绑定 :class="xxx"  <p :class="className"></p>
		· xxx是字符串 data里面设置 className: 'aClass'
		· xxx是对象 aClass为类名 isA是属性值 true/false 在data里面设置 
		<p :class="{aClass: isA, cClass: isC}">class绑定 对象</p>
		· xxx是数组 数组里面是类名
		<p :class="['bClass', 'cClass']">class绑定 数组</p>
	(2)style绑定 改变style值
		<p :style="{color: activeColor, fontSize: fontsize + 'px'} ">
#### 5、条件渲染 频繁切换用 v-show
	(1) v-if v-else 不渲染
		<p v-if="ok">成功了</p>
		<p v-else>失败了</p>
	(2)v-show 渲染出来但是隐藏起来 
		<p v-show="ok">表白成功</p>
		<p v-show="!ok">表白失败</p>
#### 6、
	(1)Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。
		这些被包裹过的方法包括：
		push()
		pop()
		shift()
		unshift()
		splice()
		sort()
		reverse()
	(2)person[index] = {name:'cat', age: 22} 不能被检测 可以用上述方法中的splice()方法代替
	(3)遍历数组   v-for="(p, index) in persons"
		<tr v-for="(p, index) in persons">
			<td>{{p.name}}</td>
			<td>{{p.age}}</td>
			<td><button type="button" @click="delate(index)">删除</button></td>
			<td><button type="button" @click="update(index, {name:'cat',age:22})">更新</button></td>
		</tr>
	(4)遍历对象   v-for="(item, key) in persons[1]"
		<ul>
			<li v-for="(item, key) in persons[1]">
				<!-- item为属性值 key为属性名，特别标志可用key 不同的属性名 -->
				{{item}}-----{{key}}
			</li>
		</ul>
#### 7、排序和搜索
	(1)搜索方法
		filterPersons() {
			// 获取 persons 和 searchName orderType 写在computed中，当数据变化时会自动调用
			const {
				persons,
				searchName,
				orderType
			} = this
			// 搜索过滤
			let filterPersons = persons.filter(p => p.name.indexOf(searchName) >= 0)
			// 排序情况，当点击不同按钮时 设置不同的排序方式
			if (orderType != 0) {
				filterPersons.sort(function(p1, p2) {
					if (orderType == 1) return p1.age - p2.age
					else return p2.age - p1.age
				})
			}
			return filterPersons
		}
#### 8、监听事件
	(1)绑定监听 传入event  @click="test2(123, $event)
		<button type="button" @click="test2(123, $event)">传参数可传入$event获取event</button>
		test2(num, event){
			console.log("参数：  "+num)
			console.log(event.target.innerHTML)
		},
	(2)事件修饰符 @click.stop="test4()" 除去冒泡事件
		<div @click="test3()" style="width: 200px; height: 200px; background-color: red;">
			<div @click.stop="test4()" style="width: 100px; height: 100px; background-color: blue">
			</div>
		</div>
	(3)按键修饰符  @keyup.enter="test5"
		<!-- 阻止默认事件发生 -->
		<a href="http://www.baidu.com" @click.prevent="test6">去百度</a>
	(4)
#### 9、表单数据收集 
	(1)阻止跳转 消除默认行为
		<form action="/xxx" method="post" @submit.prevent="getMsg">
	(2)绑定下拉选项 在select处绑定
		<select v-model="selectCity">
			<option value="">未选择</option>
			<option :value="c.name" v-for="(c, index) in allCity" :key="index" >{{c.name}}</option>
		</select>
	(3)绑定多选 设置为数组 每个都需要绑定
		<span>爱好</span>
		<input type="checkbox" name="hobby" value="baskerball" v-model="hobby" />
		<span>篮球</span>
		<input type="checkbox" name="hobby" value="football" v-model="hobby" />
	(4)绑定单选
		<input type="radio" value="男" v-model="gender" />
		<span>男</span>
		<input type="radio" value="女" v-model="gender" />
		<span>女</span>

### day02

### day03

### day04



/*
#### 1、
	(1)
	(2)
	(3)
	(4)
	(5)
*/
