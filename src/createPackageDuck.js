import createCrudClient from 'create-crud-client'
import fetchRequest from 'fetchRequest.js'
import {createDuck, withSideEffects} from 'createCrudDuck.js'

export default (duckName, namespace = 'XXX', {token, mountReducer} = {}) => {

  const authorizationHeader = token ? {authorization: `Bearer ${token}`} : {}

  const crudClient = createCrudClient(fetchRequest)({
    headers: {...authorizationHeader}
  })

  const duck = withSideEffects(createDuck(namespace, duckName), crudClient)
  const {reducer} = duck

  if (mountReducer) mountReducer(duckName, reducer)

  return {name: duckName, ...duck}

}