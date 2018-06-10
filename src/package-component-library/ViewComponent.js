import React from 'react'
import classNames from 'classnames'
import extractStyles from 'extractStyles.js'
import styles from './view-component.css'

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