import React from 'react'
import PropTypes from 'prop-types'
import {componentLibraryPackage, authenticationPackage} from 'packages.js'

const {RedirectRouteComponent} = componentLibraryPackage
const {AuthenticationService} = authenticationPackage

AuthenticationRouteContainer.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

function AuthenticationRouteContainer({path, component, ...props}) {

  function redirectTo({active} = {}) {
    return active ? '/admin' : null
  }

  return (
    <AuthenticationService render={({getAuthenticationSession}) => {
      return (
        <RedirectRouteComponent
          {...props}
          path={path}
          component={component}
          to={redirectTo(getAuthenticationSession())}
        />
      )
    }} />
  )

}

export default AuthenticationRouteContainer
