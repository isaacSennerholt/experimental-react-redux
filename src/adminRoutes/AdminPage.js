import React from 'react'
import {Link} from 'react-router-dom'
import {authPackage, componentLibraryPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage
const {UserLogoutContainer} = authPackage

function AdminPage() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Admin dashboard</h1>
        <Link to='/'>Home</Link>
        <UserLogoutContainer />
      </ViewComponent>
    </div>
  )
}

export default AdminPage