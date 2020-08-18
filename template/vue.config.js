// 读取版本号
const pkg = require('./package.json')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'

const TerserPlugin = require('terser-webpack-plugin')
process.env.VUE_APP_VERSION = pkg.version

module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,

  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: isProduction
          ? 'https://xxx'
          : 'http://aaa',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  configureWebpack: config => {
    config.resolve.alias['@assets'] = resolve('src/assets')
    config.resolve.alias['@style'] = resolve('src/style')
    config.resolve.alias['@utils'] = resolve('src/utils')

    if (isProduction) {
      config.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log']
              }
            }
          })
        ]
      }

      return {
        plugins: [
          new CompressionPlugin({ // gzip压缩
            test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
            threshold: 1024,
            deleteOriginalAssets: false // 是否删除原文件
          })
        ]
      }
    }
  },

  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '标题，在vue.config.js内'
        return args
      })
  }
}
