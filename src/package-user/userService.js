import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default (mountPath, {thunks} = {}) => {

  UserService.propTypes = {
    render: PropTypes.func.isRequired,
    post: PropTypes.func
  }

  UserService.defaultProps = {
    post: () => {}
  }

  function UserService({post, render}) {

    const createUser = payload => {
      const url = `${mountPath}/users`
      return post(url, payload)
    }

    return render({createUser})
  }

  return connect(null, thunks)(UserService)

}
