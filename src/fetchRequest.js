import config from 'config.js'
const {host, port} = config

export default function fetchRequest(endpoint, config) {
  const {body, headers} = config || {}
  const jsonBody = JSON.stringify(body) || null
  const configBody = jsonBody ? {body: jsonBody} : {}
  const configHeaders = {headers: {...headers, 'content-type': 'application/json'}}
  return fetch(
    `http://${host}:${port}${endpoint}`, 
    {...config, ...configHeaders, ...configBody})
    .then(response => {
      const {status} = response
      return {status, body: response.json()}
    })
}