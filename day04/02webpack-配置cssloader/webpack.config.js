const path = require('path')
module.exports = {
	entry: './src/main.js',
	// output必须是绝对路径，用node中的方法，const path = require('path')
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.css$/i,
			// css-loader 只负责加载css
			// style-loader 只负责把样式添加到DOM中
			// loader读取时从右向左
			use: ['style-loader', "css-loader"],
		}, ],
	},
}
