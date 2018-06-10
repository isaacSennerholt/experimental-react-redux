import React from 'react'
import styles from './field-help-component.css'

function FieldErrorComponent({message}) {
  return (
    <div>
      <span className={styles.fieldHelp}>{message}</span>
    </div>
  )
}

export default FieldErrorComponent