
const host = process.env.HOST
const port = process.env.PORT

const services = {
  service4b0c: {
    mountPath: process.env['4b0c_SERVICE_MOUNT_PATH'],
    baseUrl: process.env['4b0c_SERVICE_BASE_URL']
  },
  servicef13f: {
    mountPath: process.env['f13f_SERVICE_MOUNT_PATH'],
    baseUrl: process.env['f13f_SERVICE_BASE_URL']
  },
  service0d7a: {
    mountPath: process.env['0d7a_SERVICE_MOUNT_PATH'],
    baseUrl: process.env['0d7a_SERVICE_BASE_URL']
  }
}

module.exports = {
  host,
  port,
  services
}
