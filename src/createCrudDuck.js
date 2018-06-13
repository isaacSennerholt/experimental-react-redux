import deepmerge from 'deepmerge'
import reduceReducers from 'reduce-reducers'

export function createDuck(namespace, duckName) {
  const normalizedNamespace = namespace.toLowerCase()
  const normalizedDuckName = duckName.toLowerCase()

  const GET_REQUEST = `${normalizedNamespace}/${normalizedDuckName}/GET_REQUEST`
  const GET_SUCCESS = `${normalizedNamespace}/${normalizedDuckName}/GET_SUCCESS`
  const GET_ERROR = `${normalizedNamespace}/${normalizedDuckName}/GET_ERROR`
  
  const POST_REQUEST = `${normalizedNamespace}/${normalizedDuckName}/POST_REQUEST`
  const POST_SUCCESS = `${normalizedNamespace}/${normalizedDuckName}/POST_SUCCESS`
  const POST_ERROR = `${normalizedNamespace}/${normalizedDuckName}/POST_ERROR`
  
  const PUT_REQUEST = `${normalizedNamespace}/${normalizedDuckName}/PUT_REQUEST`
  const PUT_SUCCESS = `${normalizedNamespace}/${normalizedDuckName}/PUT_SUCCESS`
  const PUT_ERROR = `${normalizedNamespace}/${normalizedDuckName}/PUT_ERROR`
  
  const PATCH_REQUEST = `${normalizedNamespace}/${normalizedDuckName}/PATCH_REQUEST`
  const PATCH_SUCCESS = `${normalizedNamespace}/${normalizedDuckName}/PATCH_SUCCESS`
  const PATCH_ERROR = `${normalizedNamespace}/${normalizedDuckName}/PATCH_ERROR`
  
  const DELETE_REQUEST = `${normalizedNamespace}/${normalizedDuckName}/DELETE_REQUEST`
  const DELETE_SUCCESS = `${normalizedNamespace}/${normalizedDuckName}/DELETE_SUCCESS`
  const DELETE_ERROR = `${normalizedNamespace}/${normalizedDuckName}/DELETE_ERROR`
  
  function reducer(state = {}, {type, payload} = {}) {
    const isBulk = Array.isArray(payload) && !!payload.length
    const ids = isBulk ? payload.map(({id}) => id) : []
    switch (type) {
      case GET_SUCCESS:
      case POST_SUCCESS:
      case PUT_SUCCESS:
      case PATCH_SUCCESS:
        if (!isBulk) return {...state, [payload.id]: payload}
        return {...state, ...payload.reduce((items, item) => {
          items[item.id] = item
          return items
        }, {})}
      case DELETE_SUCCESS:
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
  
  const actionCreators = {
    getRequest: () => ({type: GET_REQUEST}),
    getSuccess: payload => ({type: GET_SUCCESS, payload}),
    getError: error => ({type: GET_ERROR, error}),
    postRequest: payload => ({type: POST_REQUEST, payload}),
    postSuccess: payload => ({type: POST_SUCCESS, payload}),
    postError: error => ({type: POST_ERROR, error}),
    putRequest: payload => ({type: PUT_REQUEST, payload}),
    putSuccess: payload => ({type: PUT_SUCCESS, payload}),
    putError: error => ({type: PUT_ERROR, error}),
    patchRequest: payload => ({type: PATCH_REQUEST, payload}),
    patchSuccess: payload => ({type: PATCH_SUCCESS, payload}),
    patchError: error => ({type: PATCH_ERROR, error}),
    deleteRequest: payload => ({type: DELETE_REQUEST, payload}),
    deleteSuccess: payload => ({type: DELETE_SUCCESS, payload}),
    deleteError: error => ({type: DELETE_ERROR, error})
  }
  
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