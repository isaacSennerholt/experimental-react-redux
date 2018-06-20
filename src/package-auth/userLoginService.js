import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default (apiMountPath, {thunks} = {}) => {

  UserLoginService.propTypes = {
    render: PropTypes.func.isRequired,
    post: PropTypes.func
  }
  
  UserLoginService.defaultProps = {
    post: () => {}
  }

  function UserLoginService({post, render}) {

    function userLogin(credentials) {
      const url = `${apiMountPath}/users/self/auth-sessions`
      return post(url, credentials)
    }

    function setLocalStorage(authSession) {
      if (Object.keys(authSession).length) {
        localStorage.setItem('auth_session', JSON.stringify(authSession))
      }
    }
  
    return render({userLogin, setLocalStorage})
  }
  
  return connect(null, thunks)(UserLoginService)

}