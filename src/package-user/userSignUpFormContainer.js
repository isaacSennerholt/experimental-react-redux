import React, {Component} from 'react'
import * as yup from 'yup'

export default (UserSignUpService, UserSignUpFormComponent, {UserLoginService} = {}) => {

  class UserSignUpFormContainer extends Component {

    constructor() {
      super()
      this.state = {apiError: {}}
      this.setStateOnFailure = this.setStateOnFailure.bind(this)
    }

    setStateOnFailure(apiError) {
      this.setState(() => ({apiError}))
    }

    render() {
      const {setStateOnFailure, state: {apiError}} = this
      const validationSchema = yup.object().shape({
        email: yup.string().email('An email must be formatted as such- example@host.com').required('Please enter a value'),
        password: yup.string().required('Please enter a value').test(
          'is-password',
          'Password must be 8+ characters, and include character types such as- "Password123!"',
          password => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
        )
      })
  
      function authenticateUser(userLogin, setLocalStorage) {
        return (undefined, formValues) => {
          return userLogin(formValues)
            .then(authSession => {
              return setLocalStorage(authSession)
            })
        }
      }
    
      return (
        <div>
          <UserSignUpService render={({userSignUp}) => {
            return (
              <UserLoginService render={({userLogin, setLocalStorage}) => {
                return (
                  <UserSignUpFormComponent 
                    onSubmit={userSignUp}
                    onSuccess={authenticateUser(userLogin, setLocalStorage)}
                    onFailure={setStateOnFailure}
                    initialValues={{email: '', password: ''}}
                    validationSchema={validationSchema}
                    apiError={apiError} />
                )
              }} />
            )
          }} />
        </div>
      )
    }
    
  }
  
  return UserSignUpFormContainer

}