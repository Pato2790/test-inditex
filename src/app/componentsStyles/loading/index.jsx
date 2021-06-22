import React from 'react'
import PropTypes from 'prop-types'
import styles from './loading.module.css'

const Loading = ({ body }) => {
  return (
    <div className={styles.container}>
      <p className={styles.body}>{body}</p>
    </div>
  )
}

Loading.propTypes = {
  body: PropTypes.string
}

Loading.defaultProps = {
  body: 'Loading...'
}

export default Loading
