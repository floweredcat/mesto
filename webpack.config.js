const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    
    mode: 'development',
    entry: './scripts/index.js',
    output: {
        path: path.resolve(__dirname,  './dist'),
        filename: 'index.bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'), 
            filename: 'index.html', 
            inject: false
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
          },
          compress: true,
          port: 8080,
          hot: true
        },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
}