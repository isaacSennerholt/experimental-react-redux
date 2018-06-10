import React from 'react'
import styles from './field-group-component.css'

function FieldGroupComponent({children}) {
  return (
    <div className={styles.fieldGroup}>
      {children}
    </div>
  )
}

export default FieldGroupComponent