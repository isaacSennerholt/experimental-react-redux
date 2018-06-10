import React from 'react'
import {Route} from 'react-router-dom'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'

export default [{
  RouteComponent: Route,
  exact: true,
  path: '/login',
  component: LoginPage
}, {
  RouteComponent: Route,
  exact: true,
  path: '/signup',
  component: SignUpPage
}]