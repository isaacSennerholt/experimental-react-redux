import React, {Component} from 'react'
import * as yup from 'yup'

export default (UserService, UserSignUpFormComponent, {AuthenticationService} = {}) => {

  class UserSignUpFormContainer extends Component {

    constructor() {
      super()
      this.state = {apiError: {}}
      this.setStateOnFailure = this.setStateOnFailure.bind(this)
      this.initiateAuthenticationSession = this.initiateAuthenticationSession.bind(this)
    }

    setStateOnFailure(apiError) {
      this.setState(() => ({apiError}))
    }

    initiateAuthenticationSession(createAuthenticationSession, setLocalStorage) {
      return (undefined, formValues) => {
        return createAuthenticationSession(formValues)
          .then(authenticationSession => {
            return setLocalStorage(authenticationSession)
          })
      }
    }

    render() {
      const {
        setStateOnFailure,
        initiateAuthenticationSession,
        state: {apiError}
      } = this

      const validationSchema = yup.object().shape({
        email: yup.string()
          .email('An email must be formatted as such- example@host.com')
          .required('Please enter a value'),
        password: yup.string().required('Please enter a value').test(
          'is-password',
          'Password must be 8+ characters, and include character types such as- "Password123!"',
          password => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
        )
      })

      return (
        <div>
          <UserService render={({createUser}) => {
            return (
              <AuthenticationService render={({
                createAuthenticationSession,
                setLocalStorage
              }) => {
                return (
                  <UserSignUpFormComponent
                    onSubmit={createUser}
                    onSuccess={initiateAuthenticationSession(
                      createAuthenticationSession,
                      setLocalStorage
                    )}
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
