import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../helpers/appContext'
import styles from './header.module.css'

const Header = () => {
  const { cartCount } = useContext(AppContext)

  return (
    <div className={styles.navBar}>
      <h2 className={styles.navBarTitle}>
        <Link to='/' className={styles.link}>Inditex</Link>
      </h2>
      <div className={styles.navBarCartCont}>
        <h2 className={styles.navBarCartCount}>{cartCount}</h2>
      </div>
    </div>
  )
}

export default Header
