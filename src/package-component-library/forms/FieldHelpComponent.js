import React from 'react'
import PropTypes from 'prop-types'
import styles from './field-help-component.css'

FieldHelpComponent.propTypes = {
  message: PropTypes.string
}

FieldHelpComponent.defaultProps = {
  message: ''
}

function FieldHelpComponent({message}) {
  return (
    <div>
      <span className={styles.fieldHelp}>{message}</span>
    </div>
  )
}

export default FieldHelpComponent