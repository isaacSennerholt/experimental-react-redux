import instUserSignUpService from './userSignUpService.js'
import instUserSignUpFormComponent from './userSignUpFormComponent.js'
import instUserSignUpFormContainer from './userSignUpFormContainer.js'


export default (duck = {}, apiMountPath = '/api', componentLibrary = {}) => {

  const UserSignUpService = instUserSignUpService(duck, apiMountPath)
  const UserSignUpFormComponent = instUserSignUpFormComponent(componentLibrary)
  const UserSignUpFormContainer = instUserSignUpFormContainer(UserSignUpService, UserSignUpFormComponent)

  return {
    UserSignUpService,
    UserSignUpFormComponent,
    UserSignUpFormContainer
  }

}