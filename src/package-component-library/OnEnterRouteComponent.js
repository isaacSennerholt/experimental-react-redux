import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

OnEnterRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  onEnter: PropTypes.func.isRequired
}

function OnEnterRouteComponent({path, component: Component, onEnter, ...props}) {

  function render() {
    onEnter()
    return <Component />
  }

  return (
    <Route {...props} path={path} render={render} />
  )
}

export default OnEnterRouteComponent