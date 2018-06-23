import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'formik'

export default function({
  FormContainer,
  FieldGroupComponent,
  InputComponent,
  ButtonComponent,
  SectionComponent,
  FeedbackBlockComponent
} = {}) {

  UserLoginFormComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    apiError: PropTypes.object
  }

  UserLoginFormComponent.defaultProps = {
    initialValues: {},
    validationSchema: {},
    onSuccess: () => {},
    onFailure: () => {},
    apiError: {}
  }

  function UserLoginFormComponent({
    onSubmit,
    initialValues,
    validationSchema,
    onSuccess,
    onFailure,
    apiError
  }) {

    function renderFeedbackBlock() {
      const {status} = apiError

      let textBody

      if (status == 400) textBody = 'Sorry, that password isn\'t right.'
      if (status == 404) textBody = 'Sorry, we couldn\'t find an account with that email.'

      if (!textBody) return null

      return (
        <SectionComponent>
          <FeedbackBlockComponent
            textBody={textBody}
            imageSrc='https://image.flaticon.com/icons/svg/932/932415.svg'
            className='feedbackBlockError' />
        </SectionComponent>
      )
    }

    return (
      <div>
        {renderFeedbackBlock()}
        <FormContainer
          onSubmit={onSubmit}
          onSuccess={onSuccess}
          onFailure={onFailure}
          initialValues={initialValues}
          validationSchema={validationSchema}
          apiError={apiError}
          render={({handleSubmit, isSubmitting, isValid}) => {
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
