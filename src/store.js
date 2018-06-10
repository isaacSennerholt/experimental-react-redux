import reduxThunk from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import {getReducers, setChangeListener} from 'reducerRegistry.js'

function getInitialState() {
  const authSession = localStorage.getItem('auth_session')
  const authSessionsState = authSession ? {auth_sessions: {[authSession.id]: authSession}} : {}
  return {...authSessionsState}
}

const initialState = getInitialState()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [reduxThunk]

const envMiddlewares =
    process.env.NODE_ENV === 'production' ?
    applyMiddleware(...middlewares) :
    composeEnhancers(applyMiddleware(...middlewares))

function combine(reducers) {
  const reducerNames = Object.keys(reducers)
  Object.keys(initialState).forEach(item => {
    if (!reducerNames.includes(item)) {
      reducers[item] = (state = null) => state
    }
  })
  return combineReducers(reducers)
}

const reducer = combine(getReducers())
const store = createStore(reducer, initialState, envMiddlewares)

setChangeListener(reducers => {
  store.replaceReducer(combine(reducers))
})

export default store

