import React from 'react'
import {Link} from 'react-router-dom'
import {componentLibraryPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage

function AdminPage() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Admin dashboard</h1>
        <Link to='/'>Home</Link>
      </ViewComponent>
    </div>
  )
}

export default AdminPage