import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup'

export default (UserSignUpService, UserSignUpFormComponent) => {

  UserSignUpFormContainer.propTypes = {
    initialValues: PropTypes.object
  }
  
  UserSignUpFormContainer.defaultProps = {
    initialValues: {}
  }

  function UserSignUpFormContainer({initialValues}) {
  
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
            initialValues={initialValues}
            validationSchema={validationSchema} />
        )} />
      </div>
    )
    
  }
  
  return UserSignUpFormContainer

}