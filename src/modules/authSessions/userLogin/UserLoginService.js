import React from 'react'
import {connect} from 'react-redux'
import authSessionDuck from '../authSessionDuck'
import config from '../../../config'

const {thunks} = authSessionDuck
const {serviceUser0d7a: {mountPath}} = config.services

function UserLoginService({post, render}) {

  const userLogin = credentials => {
    const url = `${mountPath}/rest/users/self/auth-sessions`
    return post(url, credentials)
  }

  return render({userLogin})
}

export default connect(null, thunks)(UserLoginService)