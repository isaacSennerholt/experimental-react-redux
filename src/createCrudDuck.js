import deepmerge from 'deepmerge'
import reduceReducers from 'reduce-reducers'

export function createDuck(namespace, duckName) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  const phases = ['REQUEST', 'SUCCESS', 'ERROR']
  const normalizedNamespace = namespace.toLowerCase()
  const normalizedDuckName = duckName.toLowerCase()

  const actionTypes = methods.reduce((actionTypes, method) => {
    return phases.reduce((newActionTypes, phase) => {
      const actionType = `${method}_${phase}`
      const value = `${normalizedNamespace}/${normalizedDuckName}/${actionType}`
      newActionTypes[actionType] = value
      return newActionTypes
    }, actionTypes)
  }, {})
  
  function reducer(state = {}, {type, payload} = {}) {
    const isBulk = Array.isArray(payload) && !!payload.length
    const ids = isBulk ? payload.map(({id}) => id) : []
    switch (type) {
      case actionTypes['GET_SUCCESS']:
      case actionTypes['POST_SUCCESS']:
      case actionTypes['PUT_SUCCESS']:
      case actionTypes['PATCH_SUCCESS']:
        if (!isBulk) return {...state, [payload.id]: payload}
        return {...state, ...payload.reduce((items, item) => {
          items[item.id] = item
          return items
        }, {})}
      case actionTypes['DELETE_SUCCESS']:
        if (!isBulk) {
          return Object.keys(state).reduce((items, stateItemId) => {
            if (stateItemId != payload.id) items[stateItemId] = state[stateItemId]
            return items
          }, {})
        }
        return Object.keys(state).reduce((items, stateItemId) => {
          if (!ids.find(itemId => itemId == stateItemId)) {
            items[stateItemId] = state[stateItemId]
          }
          return items
        }, {})
      default:
        return state
    }
  }

  const actionCreators = Object.keys(actionTypes)
    .reduce((actionCreators, actionType) => {
      const actionCreator = actionType
        .replace('_', ' ')
        .toLowerCase()
        .replace(/\W+(.)/g, (undefined, character) => {
          return character.toUpperCase()
        })
      
      actionCreators[actionCreator] = payload => {
        let value = {type: actionTypes[actionType]}
        if (payload) value = {...value, payload}
        return value
      }

      return actionCreators
    }, {})
  
  return {
    name: normalizedDuckName,
    reducer,
    actionCreators
  }
}

export function withSideEffects(duck = {}, crudClient = {}) {
  const {actionCreators} = duck
  const crudMethodNames = Object.keys(crudClient)
  const thunks = crudMethodNames.reduce((thunks, crudMethodName) => {
    thunks[crudMethodName] = (url, ...args) => {
      const requestActionCreator = actionCreators[`${crudMethodName}Request`]
      const successActionCreator = actionCreators[`${crudMethodName}Success`]
      const errorActionCreator = actionCreators[`${crudMethodName}Error`]
      const crudMethod = crudClient[crudMethodName]
      return dispatch => {
        dispatch(requestActionCreator(...args))
        return crudMethod(url, ...args)
          .then(body => {
            dispatch(successActionCreator(body))
            return body
          }, error => {
            dispatch(errorActionCreator(error))
            return Promise.reject(error)
          })
      }
    }
    return thunks
  }, {})

  return {...duck, thunks}
}

export function extendDuck(duck = {}, extension = {}) {
  const {reducer: reducerExtension} = extension
  let extendedDuckReducer = {}

  if (reducerExtension) {
    const {reducer: initialReducer} = duck
    const reducers = [initialReducer, reducerExtension]
    const extendedReducer = reduceReducers(...reducers)
    extendedDuckReducer = {reducer: extendedReducer}
  }
  
  return deepmerge.all([extension, duck, extendedDuckReducer])
}