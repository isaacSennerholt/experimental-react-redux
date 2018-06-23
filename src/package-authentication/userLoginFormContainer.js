import React, {Component} from 'react'
import * as yup from 'yup'

export default function(AuthenticationService, UserLoginFormComponent) {

  class UserLoginFormContainer extends Component {

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
        email: yup.string().required('Please enter a value'),
        password: yup.string().required('Please enter a value')
      })

      return (
        <div>
          <AuthenticationService render={({
            createAuthenticationSession,
            setLocalStorage
          }) => {
            return (
              <div>
                <UserLoginFormComponent
                  onSubmit={createAuthenticationSession}
                  onSuccess={setLocalStorage}
                  onFailure={setStateOnFailure}
                  initialValues={{email: '', password: ''}}
                  validationSchema={validationSchema}
                  apiError={apiError} />
              </div>
            )
          }} />
        </div>
      )
    }

  }

  return UserLoginFormContainer

}
