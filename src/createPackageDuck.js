import createCrudClient from 'create-crud-client'
import fetchRequest from 'fetchRequest.js'
import {createDuck, withSideEffects, extendDuck} from 'createCrudDuck.js'

export default (duckName, namespace = 'XXX', {token, mountReducer, extensions} = {}) => {

  const authorizationHeader = token ? {authorization: `Bearer ${token}`} : {}

  const crudClient = createCrudClient(fetchRequest)({
    headers: {...authorizationHeader}
  })

  const duck = withSideEffects(createDuck(namespace, duckName), crudClient)

  if (Array.isArray(extensions) && extensions.length) {
    return extensions.reduce((extendedDuck, extension) => {
      return extendDuck(extendedDuck, extension)
    }, duck)
  }

  if (mountReducer) {
    const {reducer} = duck
    mountReducer(duckName, reducer)
  }

  return {...duck}

}