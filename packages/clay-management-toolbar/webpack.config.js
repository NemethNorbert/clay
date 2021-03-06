const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/all/management-toolbar.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-management-toolbar.js',
	}),
});
