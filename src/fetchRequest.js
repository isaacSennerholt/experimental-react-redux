import clientConfig from 'clientConfig.js'
const {host, port} = clientConfig

export default function fetchRequest(endpoint, {method = 'GET', headers = {}, body} = {}) {

  const authenticationSessionString = localStorage.getItem('authentication_session')
  const {token} = typeof authenticationSessionString === 'string' ? JSON.parse(authenticationSessionString) : {}

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
