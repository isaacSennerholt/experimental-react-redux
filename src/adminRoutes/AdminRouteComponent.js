import React from 'react'
import PropTypes from 'prop-types'
import {authPackage, componentLibraryPackage} from 'packages.js'

const {LatestAuthSessionService} = authPackage
const {RedirectRouteComponent} = componentLibraryPackage

AdminRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

function AdminRouteComponent({path, component, ...props}) {
  
  function redirectTo({active} = {}) {
    return active ? null : '/login'
  }

  return (
    <LatestAuthSessionService render={({latestAuthSession}) => {
      return (
        <RedirectRouteComponent
          {...props}
          path={path}
          component={component}
          to={redirectTo(latestAuthSession)}
        />
      )
    }} />
  )
}

export default AdminRouteComponent