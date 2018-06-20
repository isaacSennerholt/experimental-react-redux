import instUserLogoutService from './userLogoutService.js'
import instUserLogoutContainer from './userLogoutContainer.js'

export default (apiMountPath = '/api', packageDuck, componentLibrary) => {

  const UserLogoutService = instUserLogoutService(apiMountPath, packageDuck)
  const UserLogoutContainer = instUserLogoutContainer(UserLogoutService, componentLibrary)

  return {
    UserLogoutService,
    UserLogoutContainer
  }

}