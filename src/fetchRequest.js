import clientConfig from 'clientConfig.js'
const {host, port} = clientConfig

export default function fetchRequest(endpoint, httpConfig) {
  const {body, headers} = httpConfig || {}
  const jsonBody = JSON.stringify(body) || null
  const httpConfigBody = jsonBody ? {body: jsonBody} : {}
  const httpConfigHeaders = {headers: {...headers, 'content-type': 'application/json'}}
  return fetch(
    `http://${host}:${port}${endpoint}`, 
    {...httpConfig, ...httpConfigHeaders, ...httpConfigBody})
    .then(response => {
      const {status} = response
      return {status, body: response.json()}
    })
}