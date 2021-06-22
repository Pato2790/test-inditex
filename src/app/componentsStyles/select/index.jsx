import React from 'react'
import PropTypes from 'prop-types'
import styles from './select.module.css'

const Select = ({ name, value, options, onChangeSelect }) => {
  return (
    <div className={styles.select}>
      <select name={name} value={value} onChange={onChangeSelect}>
        {options.map(({ code, name }) => <option key={code} value={code}>{name}</option>)}
      </select>
      <div className={styles.select_arrow}>
      </div>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  options: PropTypes.array,
  onChangeSelect: PropTypes.func
}

Select.defaultProps = {
  name: '',
  value: 0,
  options: [],
  onChangeSelect: () => { }
}

export default Select
