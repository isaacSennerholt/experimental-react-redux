import React from 'react'
import AdminRouteContainer from './AdminRouteContainer.js'
import AdminPage from './AdminPage.js'

export default [{
  routeComponent: AdminRouteContainer,
  exact: true,
  path: '/admin',
  component: AdminPage
}]
