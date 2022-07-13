const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './scripts/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './index.html'), 
            filename: 'index.html', 
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 5500,
          hot: true
        },
}