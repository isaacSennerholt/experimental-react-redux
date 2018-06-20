import instUserLoginService from './userLoginService.js'
import instUserLoginFormComponent from './userLoginFormComponent.js'
import instUserLoginFormContainer from './userLoginFormContainer.js'
import instLatestAuthSessionService from './latestAuthSessionService.js'

export default (apiMountPath = '/api', packageDuck, componentLibrary) => {

  const UserLoginService = instUserLoginService(apiMountPath, packageDuck)
  const UserLoginFormComponent = instUserLoginFormComponent(componentLibrary)
  const UserLoginFormContainer = instUserLoginFormContainer(UserLoginService, UserLoginFormComponent)
  const LatestAuthSessionService = instLatestAuthSessionService(packageDuck)

  return {
    UserLoginService,
    UserLoginFormComponent,
    UserLoginFormContainer,
    LatestAuthSessionService
  }

}