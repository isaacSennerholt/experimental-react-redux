import React from 'react'
import publicRoutes from 'publicRoutes/publicRoutes.js'
import authenticationRoutes from 'authenticationRoutes/authenticationRoutes.js'
import adminRoutes from 'adminRoutes/adminRoutes.js'

const routes = [
  ...publicRoutes,
  ...authenticationRoutes,
  ...adminRoutes
]

const routeComponents = routes.map((route, key) => {
  const {routeComponent: RouteComponent, ...routeConfigProps} = route
  return <RouteComponent {...routeConfigProps} key={key} />
})

export default routeComponents
