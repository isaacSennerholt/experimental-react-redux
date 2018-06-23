import React from 'react'
import PropTypes from 'prop-types'
import {componentLibraryPackage, authenticationPackage} from 'packages.js'

const {RedirectRouteComponent} = componentLibraryPackage
const {AuthenticationService} = authenticationPackage

AdminRouteContainer.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

export default function AdminRouteContainer({
  path,
  component,
  ...routeConfigProps
}) {

  function redirectTo({active} = {}) {
    return active ? null : '/login'
  }

  return (
    <AuthenticationService render={({getAuthenticationSession}) => {
      return (
        <RedirectRouteComponent
          {...routeConfigProps}
          path={path}
          component={component}
          to={redirectTo(getAuthenticationSession())}
        />
      )
    }} />
  )
}
