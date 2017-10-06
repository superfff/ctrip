var path = require('path')
var utils = require('./utils')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack');

const extract = new ExtractTextPlugin('css/[name].[hash].css');

//fgh+ 匹配目录中所有子文件夹
var glob = require('glob');
//获取多页面的入口集合
var entries = getEntry('./src/module/**/*.js');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // entry: {
  //   app: './src/main.js'
  // },

  //多页面入口
  entry: entries,

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
    },
  },
  //插件
  plugins: [
    extract,

    new webpack.ProvidePlugin({
      //全局引入jq
      jQuery: "jquery",
      $: "jquery",
      'window.jQuery': "jquery",
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: vueLoaderConfig
      // },


      //fgh+ 使用extractTextPlugin 将 *.vue 进行结合
      {
        test:/\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            less: ExtractTextPlugin.extract({
              use: 'css-loader!less-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },

      //fgh+ 外部引入的less/css进行打包
      // {
      //   test: /\.less$/,
      //   loader: 'css!less',
      //   // include: [resolve('assets')]
      // },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: 'css-loader'
      //   })
      // },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

//获取多页面入口的路径
function getEntry (globPath) {
  var entries = {},
      basename, // *.js *对应的文件名
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
    // pathname = './src/module/basename/basename.js'


  })

  return entries;
}
