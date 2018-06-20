import createPackageDuck from 'createPackageDuck.js'
import instUserSignUp from './userSignUp.js'

export default (
  namespace,
  {mountPath} = {},
  componentLibrary,
  authPackage,
  {requestModule, mountReducer} = {}
) => {
  
  const packageDuck = 
    createPackageDuck('users', namespace, {
      requestModule,
      mountReducer
    })
  
  const userSignUp = instUserSignUp(mountPath, packageDuck, componentLibrary, authPackage)
  
  return {
    ...userSignUp,
    ...packageDuck
  }
  
}