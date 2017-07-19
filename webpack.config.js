module.exports={
    entry: './src/pages/index/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    externals: {
        'jquery' : 'window.jQuery' //将jquery 加载进来 js文件中可以使用 var $$ = require('jquery')使用jquery $$是为了避免全局变量$冲突
    }
}