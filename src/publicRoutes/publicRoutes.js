import React from 'react'
import {Route} from 'react-router-dom'
import StartPage from './StartPage.js'

export default [{
  routeComponent: Route,
  exact: true,
  path: '/',
  component: StartPage
}]