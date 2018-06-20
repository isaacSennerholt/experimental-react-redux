import React from 'react'
import PropTypes from 'prop-types'
import FieldHelpComponent from './FieldHelpComponent.js'
import FieldLabelComponent from './FieldLabelComponent.js'
import styles from './input-component.css'

InputComponent.propTypes = {
  field: PropTypes.object.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object
}

InputComponent.defaultProps = {
  touched: {},
  errors: {}
}

function InputComponent({
  field,
  form: {touched, errors},
  ...props
}) {
  const {name} = field
  return (
    <div>
      <FieldLabelComponent name={name} />
      <input type='text' className={styles.inputField} {...field} {...props} />
      {touched[name] && errors[name] && <FieldHelpComponent message={errors[name]} />}
    </div>
  )
}

export default InputComponent