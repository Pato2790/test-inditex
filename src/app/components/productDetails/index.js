import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Select from '../../componentsStyles/select'
import Button from '../../componentsStyles/button'
import styles from './productDetails.module.css'

const ProductDetails = ({ product }) => {
  const history = useHistory()
  const [storage, setStorage] = useState(product.options.storages[0].name)
  const [color, setColor] = useState(product.options.colors[0].name)

  return (
    <div className={styles.productContainer}>
      <div className={styles.detailsContainer}>
        <h2>Detalles del Producto</h2>
        <p><b>Marca:</b> {product.brand}</p>
        <p><b>Modelo:</b> {product.model}</p>
        <p><b>Precio:</b> {product.price}</p>
        <p><b>CPU:</b> {product.cpu}</p>
        <p><b>RAM:</b> {product.ram}</p>
        <p><b>OS:</b> {product.os}</p>
        <p><b>Resolución:</b> {product.displayResolution}</p>
        <p><b>Batería:</b> {product.battery}</p>
        <p><b>Camara:</b> {product.secondaryCmera}</p>
        <p><b>Dimensiones:</b> {product.dimentions}</p>
        <p><b>Peso:</b> {product.weight} gramos</p>
      </div>
      <div className={styles.actionsContainer}>
        <h2>Agregar al carrito</h2>
        <Select name="storages" value={storage} options={product.options.storages} onChangeSelect={(event) => setStorage(event.target.value)} />
        <Select name="colors" value={color} options={product.options.colors} onChangeSelect={(event) => setColor(event.target.value)} />
        <div style={{ display: 'flex' }}>
          <Button text="Comprar" onClick={() => { }} />
          <Button text="Volver" onClick={() => history.goBack()} />
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    secondaryCmera: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
    options: PropTypes.object
  })
}

ProductDetails.defaultProps = {
  product: PropTypes.shape({
    brand: '',
    model: '',
    price: '',
    cpu: '',
    ram: '',
    os: '',
    displayResolution: '',
    battery: '',
    secondaryCmera: '',
    dimentions: '',
    weight: '',
    option: {
      colors: ['White', 'Black'],
      storages: ['32 GB']
    }
  })
}

export default ProductDetails
