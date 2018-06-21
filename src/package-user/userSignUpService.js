import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default (apiMountPath, {thunks} = {}) => {

  UserSignUpService.propTypes = {
    render: PropTypes.func.isRequired,
    post: PropTypes.func
  }
  
  UserSignUpService.defaultProps = {
    post: () => {}
  }

  function UserSignUpService({post, render}) {

    const userSignUp = userDetails => {
      const url = `${apiMountPath}/users`
      return post(url, userDetails)
    }
  
    return render({userSignUp})
  }
  
  return connect(null, thunks)(UserSignUpService)

}