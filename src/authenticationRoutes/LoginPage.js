import React from 'react'
import {Link} from 'react-router-dom'
import {authPackage, componentLibraryPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage
const {UserLoginFormContainer} = authPackage

function LoginPage() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Login</h1>
        <p>
          Need an account? <Link to='/signup'>Create an account</Link>
        </p>
        <UserLoginFormContainer />
      </ViewComponent>
    </div>
  )
}

export default LoginPage