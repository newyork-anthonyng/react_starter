const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./main.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				excludes: /node_modules/,
				loaders: ['babel']
			}
		]
	},
	resolveLoader: {
		root: [
			path.join(__dirname, 'node_modules')
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
