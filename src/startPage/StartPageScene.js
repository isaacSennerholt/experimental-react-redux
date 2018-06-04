import React, {Component} from 'react'
import users from '../modules/users'
import authSessions from '../modules/authSessions'
const {containers: {UserSignUpFormContainer}} = users
const {containers: {UserLoginFormContainer}} = authSessions

class StartPageScene extends Component {
  render() {
    return (
      <div>
        Sign up
        <UserSignUpFormContainer />
        
        Login
        <UserLoginFormContainer />
      </div>
    )
  }
}

export default StartPageScene