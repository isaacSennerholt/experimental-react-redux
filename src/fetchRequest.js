import clientConfig from 'clientConfig.js'
const {host, port} = clientConfig

export default function fetchRequest(endpoint, {method = 'GET', headers = {}, body} = {}) {

  const authSessionString = localStorage.getItem('auth_session')
  const {token} = typeof authSessionString === 'string' ? JSON.parse(authSessionString) : {}
  
  const authorizationHeader = token ? {authorization: `Bearer ${token}`} : {}
  const httpConfigHeaders = {headers: {...headers, ...authorizationHeader, 'content-type': 'application/json'}}

  const jsonBody = JSON.stringify(body) || null
  const httpConfigBody = jsonBody ? {body: jsonBody} : {}
  
  return fetch(
    `http://${host}:${port}${endpoint}`, 
    {method, ...httpConfigHeaders, ...httpConfigBody})
    .then(response => {
      const {status} = response
      return response.json()
        .then(body => {
          return {status, body}
        })
    })
    
}