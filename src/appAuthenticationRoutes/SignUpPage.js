import React from 'react'
import {Link} from 'react-router-dom'
import {userPackage, componentLibraryPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage
const {UserSignUpFormContainer} = userPackage

function LoginPage() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Get started with a free account</h1>
        <p>
          Create a free Talea account to manage your modern affiliate marketing.
          Already have a Talea account? <Link to='/login'>Log in here</Link>
        </p>
        <UserSignUpFormContainer initialValues={{email: '', password: ''}} />
      </ViewComponent>
    </div>
  )
}

export default LoginPage