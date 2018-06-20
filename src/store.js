import reduxThunk from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {getReducers, setChangeListener} from 'reducerRegistry.js'

function getInitialState() {
  const authSessionString = localStorage.getItem('auth_session')
  const authSession = typeof authSessionString === 'string' ? JSON.parse(authSessionString) : null
  const authSessionState = authSession ? {auth_sessions: {[authSession.id]: authSession}} : {}
  return {...authSessionState}
}

const initialState = getInitialState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = 
  process.env.NODE_ENV === 'development' ?
  [reduxThunk, reduxImmutableStateInvariant()] :
  [reduxThunk]

const appliedMiddlewares =
    process.env.NODE_ENV === 'development' ?
    composeEnhancers(applyMiddleware(...middlewares)) :
    applyMiddleware(...middlewares)

function combine(reducers) {
  const reducerNames = Object.keys(reducers)
  if (!reducerNames.length) return (state = null) => state

  const newReducers = Object.keys(initialState)
    .reduce((newReducers, item) => {
      if (!reducerNames.includes(item)) {
        newReducers[item] = (state = null) => state
      }
      return newReducers
    }, reducers)

  return combineReducers(newReducers)
}

const reducer = combine(getReducers())
const store = createStore(reducer, initialState, appliedMiddlewares)

setChangeListener(reducers => {
  store.replaceReducer(combine(reducers))
})

export default store

