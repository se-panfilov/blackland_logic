const path = require('path')
// const webpack = require('webpack')

module.exports = {
	entry: './src/Main.js',
	// entry: path.join(__dirname, 'src/Main.js'),
	output: {
		filename: 'blackland.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
		// libraryTarget: "umd"
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
	// devtool: "source-map",
	// target: "node", // Node.js via require
	// target: "async-node", // Node.js via fs and vm
	// plugins: [
	// 	new webpack.HotModuleReplacementPlugin() // Enable HMR
	// ]
}