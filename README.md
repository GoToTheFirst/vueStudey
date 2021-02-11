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
#### 1、生命周期 -- 常用 mounted初始化显示之后  beforeDestroy 销毁前
	(1)mounted 函数初始化显示之后立即执行, 只执行一次
		mounted() {  // 初始化显示之后立即执行, 只执行一次
			// 正常函数this是内部的 箭头函数不传this 向上查找 找到this
			this.timer = setInterval(() => {   // 用this.timer赋值，保存在vm中
				console.log("zhixing")
				this.isShow = !this.isShow
			}, 1000)
		}
	(2)beforeDestroy 在销毁前调用 只执行一次
		beforeDestroy(){  // 在销毁前调用 只执行一次
		clearInterval(this.timer)
		},
	(3)$destroy() 方法销毁vm 可用 this.$destory()
		beforeDestroy(){  // 在销毁前调用 只执行一次
			clearInterval(this.timer)
		},
	(4)全部声明周期  常用 mounted初始化显示之后  beforeDestroy 销毁前
		// 1、初始化 创建前 创建后 显示前 显示后 执行一次
			beforeCreate(){
				console.log('beforeCreate')
			},
			created() {
				console.log('created')
			},
			beforeMount() {
				console.log('beforeMount')
			},
			mounted() {
				console.log("mounted")
			},
		2、更新阶段 更新前 更新后 执行n次
			beforeUpdate() {
				console.log('beforeUpdate')
			},
			updated() {
				console.log('updated')
			},
		3、销毁阶段 销毁前 销毁后
			beforeDestroy(){  // 在销毁前调用 只执行一次
				console.log('beforeDestroy')
			},
			destroyed() {
				console.log('destroyed')
			}
#### 2、过度动画
	(1)动画 消失效果
	1、HTML中
		<div id="test2">
			<button type="button" @click="changeShow">toggle</button>
			<transition name="xxx">
				<p v-show="isShow" >hello</p>
			</transition>
		</div>
	2、css中
		显示时的过度效果
		.yyy-enter-active{
			transition: all 1s;
		}
		隐藏时的过度效果
		.yyy-leave-active{
			transition: all 2s;
		}
		.yyy-enter, .yyy-leave-to{
			opacity: 0;
			transform: translateY(20px);
		}
	(2)放大效果
	1、HTML中
		<div id="test4">
			<button type="button" @click="changeShow">toggle</button>
			<br>
			<transition name="scal">
				<p v-show="isShow" style="display: inline-block;">放大效果</p>
			</transition>
		</div>
	2、css中
		放大缩小效果
		.scal-enter-active{  // 显示效果
			animation: bounce-in 1s;
		}
		.scal-leave-active{  隐藏效果
			animation: bounce-in 1s reverse;
		}
		过度效果 
		@keyframes bounce-in{  
			0%{
				transform: scale(0);
			}
			50%{
				transform: scale(1.5);
			}
			100%{
				transform: scale(1);
			}
		}
#### 3、过滤器 语法：Vue.filter('filterStr', function(){})
	(1)moment 格式化事件参考文档：https://momentjs.bootcss.com/
#### 4、指令
	(1)防止闪现表达式 v-cloak 同时使用css配合
		<p v-cloak >{{msg}}</p>
		[v-cloak] {
			display: none;
		}
	(2)其他指令
		v:text 更新内容 同{{}} 写法一样
		v-html 更新元素的innerhtml
		v-if v-else
		v-show
		v-for
		v-on 可以简写为 @
		v-bind 强制绑定解析表达式 可以简写为 :
		v-model 双向数据绑定
		ref 注册一个唯一标识，在vue中通过 this.$refs.content 获得对象元素
	(3)自定义指令
		1、全局有效
		// 全局写法
		Vue.directive('upper-text', function(el, binding){
			// console.log(binding)
			el.textContent = binding.value.toUpperCase()
		})
		2、局部指令，在vue实例中使用directives
		directives:{
			'lower-text': function(el, binding){
				el.textContent = binding.value.toLowerCase()
			}
		}


### day03
	####vueDemo是手脚架里面的学习 同时提交
### day04



/*
#### 1、
	(1)
	(2)
	(3)
	(4)
	(5)
*/
