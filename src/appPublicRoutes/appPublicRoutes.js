import React from 'react'
import {Route} from 'react-router-dom'
import StartPage from './StartPage.js'

export default [{
  RouteComponent: Route,
  exact: true,
  path: '/',
  component: StartPage
}]