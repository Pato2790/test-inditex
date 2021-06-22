import React from 'react'
import PropTypes from 'prop-types'
import styles from './error.module.css'

const ErrorPage = ({ body }) => {
  return (
    <div className={styles.container}>
      <h1>{body}</h1>
    </div>
  )
}

ErrorPage.propTypes = {
  body: PropTypes.string
}

ErrorPage.defaultProps = {
  body: 'Page not found...'
}

export default ErrorPage
