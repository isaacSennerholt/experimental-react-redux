import userDuck from './userDuck'
import UserSignUpService from './userSignUp/UserSignUpService'
import UserSignUpFormContainer from './userSignUp/UserSignUpFormContainer'

export default {
  ...userDuck,
  services: {UserSignUpService},
  containers: {UserSignUpFormContainer}
}