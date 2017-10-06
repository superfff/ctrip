var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path');
var glob = require('glob');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin



    //fgh+ 取消统一html入口
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),

    new FriendlyErrorsPlugin()
    
  ]
})


//获取多页面入口的路径
function getEntry (globPath) {
  var entries = {},
      basename, // *.html *对应的文件名
      tmp, // 路径数组
      pathname;

  //获取对应路径符合的文件 (数组) 同步方法
  glob.sync(globPath).forEach(function(item){
    //获取 *
    basename = path.basename(item, path.extname(item));
    //路径按照 '/' 进行划分 从倒数第三个开始
    tmp = item.split('/').splice(-3);
    //返回文件夹路径 module/*
    pathname = tmp.splice(0, 1) + '/' + basename;

    //将数据存入对象
    entries[pathname] = item;
    // pathname = './src/module/basename/basename.html'


  })

  return entries;
}

//fgh+ html的入口设置
var pages = getEntry('./src/module/**/*.html');

//fgh+ html入口设置
for (var pathname in pages){
  var conf = {
    filename: pathname + '.html',
    template: pages[pathname], //路径
    minify: { //传递 html-minifier 选项给 minify 输出
      removeComments: true
    },
    inject: true, // js插入位置(true 是指 插在body中)

    // chunk 主要是针对多入口(entry)文件
    chunks: [pathname] // 每个html引用的js模块，也可以在这里加上vendor等公用模块
  }
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
