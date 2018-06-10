const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackShared = require('./webpack.shared.js')
const port = parseInt(process.env.port, 10)
 
module.exports = merge(webpackShared, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              root: path.resolve(__dirname, 'src'),
              modules: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})