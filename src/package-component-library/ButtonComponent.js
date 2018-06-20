import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import extractStyles from 'extractStyles.js'
import styles from './button-component.css'

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

ButtonComponent.defaultProps = {
  className: '',
  disabled: false
}

function ButtonComponent({className, children, disabled, ...props}) {
  const buttonClasses = classNames(
    styles.buttonDefault,
    {[styles.isDisabled]: disabled},
    extractStyles(className, styles)
  )
  return (
    <div>
      <button {...props} className={buttonClasses}>
        {children}
      </button>
    </div>
  )
}

export default ButtonComponent