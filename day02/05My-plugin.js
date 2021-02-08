(function() {
	// 需要向外暴露的插件对象
	const Myplugin = {}
	// 插件必须有个install()
	Myplugin.install = function(Vue, options) {
		// 1 添加全局方法或属性
		Vue.myGlobleMethod = function() {
			console.log('我是插件里的全局方法myGlobleFunction')
		}

		// 2 添加全局资源
		Vue.directive('my-directive', function(el, binding) {
			el.textContent = binding.value.toUpperCase()
		})

		// 4 添加实例方法
		Vue.prototype.$myShili = function() {
			console.log('这是我的实例方法$myShili')
		}


	}

	// 向外暴露
	window.Myplugin = Myplugin
})()
