import createPackageDuck from 'createPackageDuck.js'
import instAuthenticationService from './authenticationService.js'
import instUserLoginFormComponent from './userLoginFormComponent.js'
import instUserLoginFormContainer from './userLoginFormContainer.js'
import instUserLogoutButtonContainer from './userLogoutButtonContainer.js'

export default function(
  namespace,
  {mountPath} = {},
  componentLibrary,
  {requestModule, mountReducer, duckExtensions} = {}
) {

  const packageDuck =
    createPackageDuck(
      'authentication_sessions',
      namespace,
      {requestModule, mountReducer, duckExtensions}
    )

  const AuthenticationService =
    instAuthenticationService(mountPath, packageDuck)

  const UserLoginFormComponent =
    instUserLoginFormComponent(componentLibrary)

  const UserLoginFormContainer =
    instUserLoginFormContainer(AuthenticationService, UserLoginFormComponent)

  const UserLogoutButtonContainer =
    instUserLogoutButtonContainer(AuthenticationService, componentLibrary)

  return {
    AuthenticationService,
    UserLoginFormComponent,
    UserLoginFormContainer,
    UserLogoutButtonContainer,
    ...packageDuck
  }

}
