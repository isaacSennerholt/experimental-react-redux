import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import extractStyles from 'extractStyles.js'
import styles from './section-component.css'

SectionComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

SectionComponent.defaultProps = {
  className: ''
}

function SectionComponent({className, children}) {
  const sectionClasses = classNames(
    styles.sectionDefault,
    extractStyles(className, styles)
  )
  return (
    <div className={sectionClasses}>
      {children}
    </div>
  )
}

export default SectionComponent