import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default ({selectors} = {}) => {

  const {getLatestItemByCreationDate} = selectors

  LatestAuthSessionService.propTypes = {
    render: PropTypes.func.isRequired,
    latestAuthSession: PropTypes.object
  }

  LatestAuthSessionService.defaultProps = {
    latestAuthSession: {}
  }

  function LatestAuthSessionService({latestAuthSession, render}) {
    return render({latestAuthSession})
  }

  return connect(store => ({
    latestAuthSession: getLatestItemByCreationDate(store)
  }))(LatestAuthSessionService)

}