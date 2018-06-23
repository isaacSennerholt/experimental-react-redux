import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

RedirectRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  to: PropTypes.string
}

function RedirectRouteComponent({path, component: Component, to, ...routeConfigProps}) {

  function render(reactRouterProps) {
    return to ? <Redirect to={to} /> : <Component {...reactRouterProps} />
  }

  return (
    <Route {...routeConfigProps} path={path} render={render} />
  )
}

export default RedirectRouteComponent
