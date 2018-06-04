import authSessionDuck from './authSessionDuck'
import UserLoginService from './userLogin/UserLoginService'
import UserLoginFormContainer from './userLogin/UserLoginFormContainer'

export default {
  ...authSessionDuck,
  services: {UserLoginService},
  containers: {UserLoginFormContainer}
}