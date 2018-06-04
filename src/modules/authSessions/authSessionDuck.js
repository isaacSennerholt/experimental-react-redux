import createCrudClient from 'create-crud-client'
import fetchRequest from '../../fetchRequest'
import {createDuck, withSideEffects} from '../../create-crud-duck'
import {registerReducer} from '../../reducer-registry'

const resourceName = 'auth_sessions'

const {token} = localStorage.getItem('auth_session') || {}
const authorizationHeader = token ? {authorization: `Bearer ${token}`} : {}

const crudClient = createCrudClient(fetchRequest)({
  headers: {...authorizationHeader}
})

const duck = withSideEffects(createDuck('web-client', resourceName), crudClient)
const {reducer} = duck

registerReducer(resourceName, reducer)

export default duck

