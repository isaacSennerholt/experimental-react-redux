import createPackageDuck from 'createPackageDuck.js'
import instUserLogin from './userLogin.js'
import instUserLogout from './userLogout.js'
import selectorDuckExtension from './selectorDuckExtension.js'

export default (
  namespace,
  {mountPath} = {},
  componentLibrary,
  {requestModule, mountReducer} = {}
) => {

  const packageDuck = 
    createPackageDuck('auth_sessions', namespace, {
      requestModule,
      mountReducer,
      duckExtensions: [selectorDuckExtension]
    })
  
  const userLogin = instUserLogin(mountPath, packageDuck, componentLibrary)
  const userLogout = instUserLogout(mountPath, packageDuck, componentLibrary)
  
  return {
    ...userLogin,
    ...userLogout,
    ...packageDuck
  }
  
}