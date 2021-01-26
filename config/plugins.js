const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =[
    new HtmlWebpackPlugin({
        title: 'Chama React Test',
        template: './src/index.html',
        inject: 'body',
    })
]