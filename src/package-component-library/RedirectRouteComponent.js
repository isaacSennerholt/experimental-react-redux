import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

RedirectRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  to: PropTypes.string
}

function RedirectRouteComponent({path, component: Component, to, ...props}) {

  function render() {
    return to ? <Redirect to={to} /> : <Component />
  }

  return (
    <Route {...props} path={path} render={render} />
  )
}

export default RedirectRouteComponent