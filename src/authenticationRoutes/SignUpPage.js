import React from 'react'
import {Link} from 'react-router-dom'
import {componentLibraryPackage, userPackage} from 'packages.js'

const {ViewComponent} = componentLibraryPackage
const {UserSignUpFormContainer} = userPackage

export default function() {
  return (
    <div>
      <ViewComponent className='viewSmall'>
        <h1>Get started with a free account</h1>
        <p>
          Create a free account.
          Already have an account? <Link to='/login'>Log in here</Link>
        </p>
        <UserSignUpFormContainer />
      </ViewComponent>
    </div>
  )
}
