import instUserLoginService from './userLoginService.js'
import instUserLoginFormComponent from './userLoginFormComponent.js'
import instUserLoginFormContainer from './userLoginFormContainer.js'


export default (duck = {}, apiMountPath = '/api', componentLibrary = {}) => {

  const UserLoginService = instUserLoginService(duck, apiMountPath)
  const UserLoginFormComponent = instUserLoginFormComponent(componentLibrary)
  const UserLoginFormContainer = instUserLoginFormContainer(UserLoginService, UserLoginFormComponent)

  return {
    UserLoginService,
    UserLoginFormComponent,
    UserLoginFormContainer
  }

}