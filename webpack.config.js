var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), // 错误处理
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: 'dist/*.*'
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'dist'),
                to: path.resolve(__dirname, 'dest'),
                // ignore: ['.*']
                // toType: 'dir'
            }
        ])
    ]
}
