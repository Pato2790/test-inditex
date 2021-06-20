import React from 'react'
import PropTypes from 'prop-types'
import styles from './item.module.css'

const Item = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.imgUrl} alt="product" className={styles.productImg} />
      <div className={styles.container}>
        <p><b>Brand:</b> {item.brand}</p>
        <p><b>Model:</b> {item.model}</p>
        <p><b>Price:</b> {item.price}</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string
  })
}

Item.defaultProps = {
  item: PropTypes.objectOf({
    id: '',
    brand: '',
    model: '',
    price: '',
    imgUrl: ''
  })
}

export default Item
