import React from 'react'
import AuthenticationRouteContainer from './AuthenticationRouteContainer.js'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'

export default [{
  routeComponent: AuthenticationRouteContainer,
  exact: true,
  path: '/login',
  component: LoginPage
}, {
  routeComponent: AuthenticationRouteContainer,
  exact: true,
  path: '/signup',
  component: SignUpPage
}]
