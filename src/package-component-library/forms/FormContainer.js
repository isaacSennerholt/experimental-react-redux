import React from 'react'
import PropTypes from 'prop-types'
import {Formik} from 'formik'

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  apiError: PropTypes.object,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  render: PropTypes.func
}

FormContainer.defaultProps = {
  initialValues: {},
  validationSchema: {},
  apiError: {},
  onSuccess: () => {},
  onFailure: () => {},
  render: () => {}
}

function FormContainer({onSubmit, initialValues, validationSchema, apiError, onSuccess, onFailure, render}) {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          onSubmit(values)
            .then(response => {
              setSubmitting(false)
              return onSuccess(response, values)
            }, error => {
              setSubmitting(false)
              return onFailure(error, values)
            })
        }}
        render={render} />
    </div>
  )
}

export default FormContainer