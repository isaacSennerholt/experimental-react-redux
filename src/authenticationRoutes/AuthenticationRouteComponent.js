import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import {userPackage, componentLibraryPackage} from 'packages.js'

const {ducks: {auth_sessions}} = userPackage
const {OnEnterRouteComponent} = componentLibraryPackage

AuthenticationRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

function AuthenticationRouteComponent({path, component, ...props}) {
  
  function validateAuthSession() {
    const {selectors: {getLatestAuthSession}} = auth_sessions
    return getLatestAuthSession()
  }

  return (
    <OnEnterRouteComponent
      {...props}
      path={path}
      component={component}
      onEnter={validateAuthSession}
    />
  )
}

export default AuthenticationRouteComponent