const dotenv = require('dotenv')
dotenv.load()
 
const path = require('path')
const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()
const port = parseInt(process.env.PORT, 10)
const buildDirectory = path.resolve(__dirname, 'public')
const {services} = require('./serverConfig.js')

function mountProxies() {
  return Object.values(services).map(service => {
    const {mountPath, baseUrl} = service
    return Promise.resolve(app.use(mountPath, proxy({target: baseUrl})))
  })
}

app.use(express.static(buildDirectory))

app.route('*')
  .get((req, res) => {
    res.sendFile(`${buildDirectory}/index.html`)
  }) 

Promise.all(mountProxies())
  .then(() => {
    app.listen(port, () => {
      console.log(`🐝  Server humming on localhost:${port}`)
    })
  })