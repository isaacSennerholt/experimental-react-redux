import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import extractStyles from 'extractStyles.js'
import styles from './feedback-block-component.css'

FeedbackBlockComponent.propTypes = {
  textBody: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  className: PropTypes.string
}

FeedbackBlockComponent.defaultProps = {
  imageSrc: '',
  className: ''
}

function FeedbackBlockComponent({className, textBody, imageSrc}) {
  const feedbackBlockClasses = classNames(
    styles.feedbackBlockDefault,
    extractStyles(className, styles)
  )
  return (
    <div className={feedbackBlockClasses}>
      {imageSrc && (
      <div className={styles.feedbackBlockImage}>
        <img src={imageSrc} />
      </div>)}
      <div className={styles.feedbackBlockTextBody}>
        <span>{textBody}</span>
      </div>
    </div>
  )
}

export default FeedbackBlockComponent