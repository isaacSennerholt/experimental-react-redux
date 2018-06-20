import React from 'react'
import PropTypes from 'prop-types'
import styles from './field-group-component.css'

FieldGroupComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
}

function FieldGroupComponent({children}) {
  return (
    <div className={styles.fieldGroup}>
      {children}
    </div>
  )
}

export default FieldGroupComponent