import React from 'react'
import appPublicRoutes from 'appPublicRoutes/appPublicRoutes.js'
import appAuthenticationRoutes from 'appAuthenticationRoutes/appAuthenticationRoutes.js'
import appAdminRoutes from 'appAdminRoutes/appAdminRoutes.js'

const appRoutes = [
  ...appPublicRoutes,
  ...appAuthenticationRoutes,
  ...appAdminRoutes
]

const appRouteComponents = appRoutes.map((appRoute, key) => {
  const {RouteComponent, ...props} = appRoute
  return <RouteComponent {...props} key={key} />
})

export default appRouteComponents