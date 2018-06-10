import React from 'react'
import {connect} from 'react-redux'

export default ({thunks}, apiMountPath) => {

  function UserSignUpService({post, render}) {

    const userSignUp = userDetails => {
      const url = `${apiMountPath}/users`
      return post(url, userDetails)
    }
  
    return render({userSignUp})
  }
  
  return connect(null, thunks)(UserSignUpService)

}