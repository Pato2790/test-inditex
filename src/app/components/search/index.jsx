import React from 'react'
import PropTypes from 'prop-types'
import styles from './search.module.css'

const Search = ({ searchText, onSearchTextChange }) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search..." className={styles.inputSearch} defaultValue={searchText} onChange={onSearchTextChange} />
    </div>
  )
}

Search.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func
}

Search.defaultProps = {
  searchText: '',
  onSearchTextChange: () => { }
}

export default Search
