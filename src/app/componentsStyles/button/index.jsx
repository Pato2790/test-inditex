import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  text: '',
  onClick: () => { }
}

export default Button
