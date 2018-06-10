import React from 'react'
import {Link} from 'react-router-dom'
import {userPackage, componentLibraryPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage
const {UserLoginFormContainer} = userPackage

function LoginPage() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Login</h1>
        <p>
          Need an account? <Link to='/signup'>Create an account</Link>
        </p>
        <UserLoginFormContainer initialValues={{email: '', password: ''}} />
      </ViewComponent>
    </div>
  )
}

export default LoginPage