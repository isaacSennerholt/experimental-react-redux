import instUserDuck from './userDuck.js'
import instUserSignUp from './userSignUp/userSignUp.js'

export default (namespace, apiConfig = {}, componentLibrary, {mountReducer} = {}) => {
  const {mountPath, token} = apiConfig
  const userDuck = instUserDuck(namespace, {token, mountReducer})
  const userSignUp = instUserSignUp(userDuck, mountPath, componentLibrary)
  return {...userDuck, ...userSignUp}
}