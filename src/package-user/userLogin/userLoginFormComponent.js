import React from 'react'
import PropTypes from 'prop-types'
import {Formik, Field} from 'formik'

export default ({FieldGroupComponent, InputComponent, ButtonComponent}) => {

  UserLoginFormComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func
  }
  
  UserLoginFormComponent.defaultProps = {
    initialValues: {},
    validationSchema: {},
    onSuccess: () => {},
    onFailure: () => {}
  }

  function UserLoginFormComponent({onSubmit, initialValues, validationSchema, onSuccess, onFailure}) {
    return (
      <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
              onSubmit(values)
                .then(response => {
                  setSubmitting(false)
                  return onSuccess(response)
                },
                error => {
                  setSubmitting(false)
                  return onFailure(error)
                })
            }}
            render={({
              handleSubmit,
              isSubmitting,
              isValid
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FieldGroupComponent>
                    <Field type='email' name='email' component={InputComponent} />
                  </FieldGroupComponent>
                  <FieldGroupComponent>
                    <Field type='password' name='password' component={InputComponent} />
                  </FieldGroupComponent>
                  <ButtonComponent 
                    type='submit'
                    disabled={isSubmitting || !isValid}
                    className='buttonPrimary'>
                    Submit
                  </ButtonComponent>
                </form>
              )
            }} />
      </div>
    )
  }

  return UserLoginFormComponent
  
}