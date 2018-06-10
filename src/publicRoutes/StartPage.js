import React from 'react'
import {Link} from 'react-router-dom'
import {componentLibraryPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage

function StartPage() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Start page</h1>
        <Link to='/login'>Login</Link>
      </ViewComponent>
    </div>
  )
}

export default StartPage