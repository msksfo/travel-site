// create an object that tells webpack what to do

// 'path' is a native part of the node js environment. no need to install. it's built into node
var path = require('path');

module.exports = {

	entry: './app/assets/scripts/app.js', // tell webpack which file to look at to create it's bundle
	output: { // tell webpack where the final product bundled file should be output to
		path: path.resolve(__dirname, "./app/temp/scripts"), //provide the path to where we want the bundled file to be created. but webpack needs an absolute path, not relative, so we require in 'path' from node.
		filename: 'app.js' // control the name of the bundled file
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, //tell webpack to ONLY use babel on  javascript files
				exclude: /node_modules/  // tell webpack not to run babel on all js files, only the ones i wrote
			}
		]
	}
}