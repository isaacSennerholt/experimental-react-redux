import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'

export default (UserSignUpService, UserSignUpFormComponent) => {

  UserSignUpFormContainer.propTypes = {
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    initialValues: PropTypes.object
  }
  
  UserSignUpFormContainer.defaultProps = {
    onSuccess: () => {},
    onFailure: () => {},
    initialValues: {}
  }

  function UserSignUpFormContainer({onSuccess, onFailure, initialValues}) {
  
    const validationSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().test(
        'is-password',
        'Password must be 8+ characters, and include character types such as- "Password123!"',
        password => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
      )
    })
  
    return (
      <div>
        <UserSignUpService render={({userSignUp}) => (
          <UserSignUpFormComponent 
            onSubmit={userSignUp}
            onSuccess={onSuccess}
            onFailure={onFailure}
            initialValues={initialValues}
            validationSchema={validationSchema} />
        )} />
      </div>
    )
    
  }
  
  return UserSignUpFormContainer

}