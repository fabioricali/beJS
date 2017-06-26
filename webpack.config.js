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
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, include: /\.min\.js$/ }),
    ]
};
