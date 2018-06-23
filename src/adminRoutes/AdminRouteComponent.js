import React from 'react'
import PropTypes from 'prop-types'
import {componentLibraryPackage, authenticationPackage} from 'packages.js'

const {RedirectRouteComponent} = componentLibraryPackage
const {AuthenticationService} = authenticationPackage

AdminRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

export default function AdminRouteComponent({
  path,
  component,
  ...routeConfigProps
}) {

  function redirectTo({active} = {}) {
    return active ? null : '/login'
  }

  return (
    <AuthenticationService render={({authenticationSession}) => {
      return (
        <RedirectRouteComponent
          {...routeConfigProps}
          path={path}
          component={component}
          to={redirectTo(authenticationSession)}
        />
      )
    }} />
  )
}
