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
  const {RouteComponent, ...props} = route
  return <RouteComponent {...props} key={key} />
})

export default routeComponents