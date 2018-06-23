import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default function(mountPath, {selectors, thunks} = {}) {

  const {getLatestItemByCreationDate} = selectors

  AuthenticationService.propTypes = {
    render: PropTypes.func.isRequired,
    post: PropTypes.func,
    patch: PropTypes.func,
    authenticationSession: PropTypes.object
  }

  AuthenticationService.defaultProps = {
    post: () => {},
    patch: () => {},
    authenticationSession: {}
  }

  function AuthenticationService({post, patch, authenticationSession, render}) {

    function getAuthenticationSession() {
      return authenticationSession
    }

    function createAuthenticationSession(payload) {
      const url = `${mountPath}/users/self/authentication-sessions`
      return post(url, payload)
    }

    function updateAuthenticationSession(payload) {
      const {id} = authenticationSession
      const url = `${mountPath}/users/self/authentication-sessions/${id}`
      return patch(url, payload)
    }

    function setLocalStorage(authenticationSession) {
      if (Object.keys(authenticationSession).length) {
        localStorage.setItem('authentication_session', JSON.stringify(authenticationSession))
      }
    }

    function clearLocalStorage() {
      localStorage.removeItem('authentication_session')
    }

    return render({
      getAuthenticationSession,
      createAuthenticationSession,
      updateAuthenticationSession,
      setLocalStorage,
      clearLocalStorage
    })

  }

  return connect(store => ({
    authenticationSession: getLatestItemByCreationDate(store)
  }), thunks)(AuthenticationService)

}
