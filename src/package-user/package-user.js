import createPackageDuck from 'createPackageDuck.js'
import instUserService from './userService.js'
import instUserSignUpFormComponent from './userSignUpFormComponent.js'
import instUserSignUpFormContainer from './userSignUpFormContainer.js'

export default (
  namespace,
  {mountPath} = {},
  componentLibrary,
  authenticationPackage,
  {requestModule, mountReducer} = {}
) => {

  const packageDuck =
    createPackageDuck('users', namespace, {requestModule, mountReducer})

  const UserService =
    instUserService(mountPath, packageDuck)

  const UserSignUpFormComponent =
    instUserSignUpFormComponent(componentLibrary)

  const UserSignUpFormContainer =
    instUserSignUpFormContainer(
      UserService,
      UserSignUpFormComponent,
      authenticationPackage
    )

  return {
    instUserService,
    UserSignUpFormComponent,
    UserSignUpFormContainer,
    ...packageDuck
  }

}
