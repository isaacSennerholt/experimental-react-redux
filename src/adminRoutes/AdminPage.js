import React from 'react'
import {Link} from 'react-router-dom'
import {componentLibraryPackage, authenticationPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage
const {UserLogoutButtonContainer} = authenticationPackage

export default function() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Admin dashboard</h1>
        <Link to='/'>Home</Link>
        <UserLogoutButtonContainer />
      </ViewComponent>
    </div>
  )
}
