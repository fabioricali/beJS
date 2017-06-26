const webpack = require('webpack');

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
                warnings:false,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            }, include: /\.min\.js$/ }),
    ]
};
