import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.module.css'

const Header = ({ cartCount }) => {
  return (
    <div className={styles.navBar}>
      <h2 className={styles.navBarTitle}>
        Inditex
      </h2>
      <div className={styles.navBarCartCont}>
        <h2 className={styles.navBarCartCount}>{cartCount}</h2>
      </div>
    </div>
  )
}

Header.propTypes = {
  cartCount: PropTypes.number
}

Header.defaultProps = {
  cartCount: 0
}

export default Header
