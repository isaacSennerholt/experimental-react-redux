import createCrudClient from 'create-crud-client'
import fetchRequest from 'fetchRequest.js'
import {createDuck, withSideEffects} from 'createCrudDuck.js'

export default (namespace = 'XXX', {token, mountReducer} = {}) => {

  const duckName = 'users'

  const authorizationHeader = token ? {authorization: `Bearer ${token}`} : {}

  const crudClient = createCrudClient(fetchRequest)({
    headers: {...authorizationHeader}
  })

  const userDuck = withSideEffects(createDuck(namespace, duckName), crudClient)
  const {reducer} = userDuck

  if (mountReducer) mountReducer(duckName, reducer)

  return {name: duckName, ...userDuck}

}

