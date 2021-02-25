const path = require('path')
module.exports = {
	entry: './src/main.js',
	// output必须是绝对路径，用node中的方法，const path = require('path')
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module: {
		rules: [{
				test: /\.css$/i,
				// css-loader 只负责加载css
				// style-loader 只负责把样式添加到DOM中
				// loader读取时从右向左
				use: ['style-loader', "css-loader"],
			},
			{
				test: /\.less$/i,
				// css-loader 只负责加载css
				// style-loader 只负责把样式添加到DOM中
				// less-loader 只负责把less转化为css文件
				// loader读取时从右向左
				// use: ['style-loader', "css-loader", "less-loader"],
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						// 当图片大小大于limit时 会用file-loader进行打包,不需要特别配置
						// 当图片大小小于limit时 会用url-loader打包
						limit: 250,
						// 配置图片命名和位置 在img文件夹下 名字+8位哈希数字+扩展名
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			}
		],
	},
}
