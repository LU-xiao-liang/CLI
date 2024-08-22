const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    output: {
        clean: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        })
    ],
    devServer:{
        port:8000,
        open:true,
    }
}