const dotenv = require('dotenv')
dotenv.load()

const path = require('path')
const webpack = require('webpack')
const devPort = parseInt(process.env.DEV_PORT, 10)
const clientDirectory = path.resolve(__dirname, 'src')
const buildDirectory = path.resolve(__dirname, 'public')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: [clientDirectory],
  output: {
    path: buildDirectory,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.css', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({...process.env}),
    new HtmlWebpackPlugin({
      title: 'Talea',
      template: 'template.html'
    })
  ]
}