import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

OnEnterRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  onEnter: PropTypes.func.isRequired
}

function OnEnterRouteComponent({path, component: Component, onEnter, ...routeConfigProps}) {

  function render(reactRouterProps) {
    onEnter()
    return <Component {...reactRouterProps} />
  }

  return (
    <Route {...routeConfigProps} path={path} render={render} />
  )
}

export default OnEnterRouteComponent
