import React from 'react'
import {connect} from 'react-redux'

export default ({thunks}, apiMountPath) => {

  function UserLoginService({post, render}) {

    const userLogin = credentials => {
      const url = `${apiMountPath}/users/self/auth-sessions`
      return post(url, credentials)
    }
  
    return render({userLogin})
  }
  
  return connect(null, thunks)(UserLoginService)

}