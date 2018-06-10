import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import {componentLibraryPackage} from 'packages.js'

const {OnEnterRouteComponent} = componentLibraryPackage

AdminRouteComponent.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

function AdminRouteComponent({path, component, ...props}) {
  
  function validateAdminUser() {
    console.log('=========================')
    console.log('Do some admin checks and validations!')
    console.log('=========================')
  }

  return (
    <OnEnterRouteComponent
      {...props}
      path={path}
      component={component}
      onEnter={validateAdminUser}
    />
  )
}

export default AdminRouteComponent