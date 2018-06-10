import React from 'react'
import AdminRouteComponent from './AdminRouteComponent.js'
import AdminPage from './AdminPage.js'

export default [{
  RouteComponent: AdminRouteComponent,
  exact: true,
  path: '/admin',
  component: AdminPage
}]