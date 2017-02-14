const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),

	output: {
	  	path: path.resolve(__dirname, 'assets'),
		publicPath: '/assets/',
		filename: 'origami.bundle.js'
	},

	module: {
		rules: [
			{
				test:/\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'less': ExtractTextPlugin.extract({
							use: [
								'css-loader',
								'less-loader'
							],
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					use: [
						'css-loader',
						'less-loader'
					],
					fallback: 'vue-style-loader'
				})
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'vue-style-loader'
				})
			},
			{
				test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
				loader: 'file-loader',
				options: {
					name: 'files/[name].[ext]?[hash]'
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('origami.bundle.css')
	],
	devtool: '#eval-source-map'
};

if(process.env.NODE_ENV === 'production'){
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]);
}
