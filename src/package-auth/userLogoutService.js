import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default (apiMountPath, {thunks, selectors} = {}) => {

  const {getLatestItemByCreationDate} = selectors

  UserLogoutService.propTypes = {
    render: PropTypes.func.isRequired,
    patch: PropTypes.func,
    latestAuthSession: PropTypes.object
  }
  
  UserLogoutService.defaultProps = {
    patch: () => {},
    latestAuthSession: {}
  }

  function UserLogoutService({patch, latestAuthSession, render}) {

    function userLogout() {
      const {id} = latestAuthSession
      const url = `${apiMountPath}/users/self/auth-sessions/${id}`
      return patch(url, {active: false})
    }

    function clearLocalStorage() {
      localStorage.removeItem('auth_session')
    }
  
    return render({userLogout, clearLocalStorage})
  }
  
  return connect(store => ({
    latestAuthSession: getLatestItemByCreationDate(store)
  }), thunks)(UserLogoutService)

}