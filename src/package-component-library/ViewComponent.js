import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import extractStyles from 'extractStyles.js'
import styles from './view-component.css'

ViewComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  className: PropTypes.string
}

ViewComponent.defaultProps = {
  className: ''
}

function ViewComponent({className, children}) {
  const viewClasses = classNames(
    styles.viewDefault,
    extractStyles(className, styles)
  )
  return (
    <div className={viewClasses}>
      {children}
    </div>
  )
}

export default ViewComponent