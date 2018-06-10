import React from 'react'
import classNames from 'classnames'
import extractStyles from 'extractStyles.js'
import styles from './button-component.css'

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