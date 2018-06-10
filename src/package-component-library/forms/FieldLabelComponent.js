import React from 'react'
import styles from './field-label-component.css'

function FieldLabelComponent({name}) {
  return (
    <div>
      <label htmlFor={name} className={styles.fieldLabel}>
        {name}
      </label>
    </div>
  )
}

export default FieldLabelComponent