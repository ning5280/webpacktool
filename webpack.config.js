var webpack = require('webpack');
module.exports={
    entry: {
        'common': ['./src/pages/common/index.js'],
        'index': ['./src/pages/index/index.js'],
        'login': ['./src/pages/login/index.js']
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    },
    externals: {
        'jquery' : 'window.jQuery' //将jquery 加载进来 js文件中可以使用 var $$ = require('jquery')使用jquery $$是为了避免全局变量$冲突
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ]
}