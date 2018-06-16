import createPackageDuck from 'createPackageDuck.js'
import instUserSignUp from './userSignUp/userSignUp.js'
import instUserLogin from './userLogin/userLogin.js'

export default (namespace, apiConfig = {}, componentLibrary, {mountReducer} = {}) => {
  const {mountPath, token} = apiConfig
  
  const userDuck = createPackageDuck('users', namespace, {token, mountReducer})
  const userSignUp = instUserSignUp(userDuck, mountPath, componentLibrary)

  const authSessionDuck = createPackageDuck('auth_sessions', namespace, {token, mountReducer})
  const userLogin = instUserLogin(authSessionDuck, mountPath, componentLibrary)
  
  return {...userSignUp, ...userLogin, ducks: {
    [userDuck.name]: userDuck,
    [authSessionDuck.name]: authSessionDuck
  }}
}