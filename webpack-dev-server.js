const dotenv = require('dotenv')
dotenv.load()
 
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackDev = require('./webpack.dev')
const port = parseInt(process.env.PORT, 10)
const {services} = require('./config')

const proxy = Object.values(services).reduce((proxy, service) => {
  const {mountPath, baseUrl} = service
  if (mountPath) proxy[mountPath] = baseUrl
  return proxy
}, {})

const server = new WebpackDevServer(webpack(webpackDev), {
  contentBase: webpackDev.output.path,
  publicPath: webpackDev.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy
})
 
server.listen(port, 'localhost', error => {
  if (error) return console.log(error)
  console.log(`🐝  Web-client-server humming on localhost:${port}`)
})