const dotenv = require('dotenv')
dotenv.load()

const path = require('path')
const webpack = require('webpack')
const devPort = parseInt(process.env.DEV_PORT, 10)
const clientDirectory = path.resolve(__dirname, 'src')
const buildDirectory = path.resolve(__dirname, 'public')
 
module.exports = {
  entry: [
    clientDirectory
  ],
  output: {
    path: buildDirectory,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({...process.env})
  ]
}