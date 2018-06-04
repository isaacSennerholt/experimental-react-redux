const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')
const port = parseInt(process.env.port, 10)
 
module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})