import React from 'react'
import {connect} from 'react-redux'
import userDuck from '../userDuck'
import config from '../../../config'

const {thunks} = userDuck
const {serviceUser0d7a: {mountPath}} = config.services

function UserSignUpService({post, render}) {

  const userSignUp = userDetails => {
    const url = `${mountPath}/rest/users`
    return post(url, userDetails)
  }

  return render({userSignUp})
}

export default connect(null, thunks)(UserSignUpService)