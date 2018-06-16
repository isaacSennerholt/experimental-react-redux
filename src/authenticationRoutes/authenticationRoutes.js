import React from 'react'
import AuthenticationRouteComponent from './AuthenticationRouteComponent.js'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'

export default [{
  RouteComponent: AuthenticationRouteComponent,
  exact: true,
  path: '/login',
  component: LoginPage
}, {
  RouteComponent: AuthenticationRouteComponent,
  exact: true,
  path: '/signup',
  component: SignUpPage
}]