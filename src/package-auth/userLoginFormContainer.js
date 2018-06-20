import React, {Component} from 'react'
import * as yup from 'yup'

export default (UserLoginService, UserLoginFormComponent) => {

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
          <UserLoginService render={({userLogin, setLocalStorage}) => {
            return (
              <div>
                <UserLoginFormComponent 
                  onSubmit={userLogin}
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