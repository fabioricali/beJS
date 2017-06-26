const webpack = require('webpack');
const unminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: './dist/be.min.js',
        library: 'be',
        umdNamedDefine: true
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js'],
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
            },
        }],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            comments: false,
            compress: {
                warnings:false
            }, include: /\.min\.js$/ }),
        new unminifiedWebpackPlugin()
    ]
};
