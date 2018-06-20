import React from 'react'
import PropTypes from 'prop-types'
import styles from './field-label-component.css'

FieldLabelComponent.propTypes = {
  name: PropTypes.string
}

FieldLabelComponent.defaultProps = {
  name: ''
}

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