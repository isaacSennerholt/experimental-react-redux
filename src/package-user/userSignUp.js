import instUserSignUpService from './userSignUpService.js'
import instUserSignUpFormComponent from './userSignUpFormComponent.js'
import instUserSignUpFormContainer from './userSignUpFormContainer.js'

export default (apiMountPath = '/api', packageDuck, componentLibrary, authPackage) => {

  const UserSignUpService = instUserSignUpService(apiMountPath, packageDuck)
  const UserSignUpFormComponent = instUserSignUpFormComponent(componentLibrary)
  const UserSignUpFormContainer = instUserSignUpFormContainer(UserSignUpService, UserSignUpFormComponent, authPackage)

  return {
    UserSignUpService,
    UserSignUpFormComponent,
    UserSignUpFormContainer
  }

}