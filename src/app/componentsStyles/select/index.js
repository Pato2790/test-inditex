import React from 'react'
import PropTypes from 'prop-types'
import styles from './select.module.css'

const Select = ({ name, value, options, onChangeSelect }) => {
  return (
    <div className={styles.select}>
      <select name={name} value={value} onChange={onChangeSelect}>
        {options.map(({ code, name }) => <option key={code} value={name}>{name}</option>)}
      </select>
      <div className={styles.select_arrow}>
      </div>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.object,
  onChangeSelect: PropTypes.func
}

Select.defaultProps = {
  name: '',
  value: '',
  options: {
    code: '',
    name: ''
  },
  onChangeSelect: () => { }
}

export default Select
