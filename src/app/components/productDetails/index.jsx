import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { AppContext } from '../../helpers/appContext'
import { CART_COUNT } from '../../helpers/constants'
import { usePost } from '../../api'
import { CART_POST } from '../../api/constants'
import Select from '../../componentsStyles/select'
import Button from '../../componentsStyles/button'
import styles from './productDetails.module.css'

const ProductDetails = ({ product, cookies }) => {
  const history = useHistory()
  const { addProductToCart } = useContext(AppContext)
  const [storage, setStorage] = useState(product.options.storages[0].code)
  const [color, setColor] = useState(product.options.colors[0].code)
  const [data, postData] = usePost(CART_POST, { id: product.id, colorCode: color, storageCode: storage })

  const goBack = () => {
    history.goBack()
  }

  useEffect(() => {
    const { count } = data
    if (count) {
      addProductToCart(count)
      const now = new Date()
      cookies.set(CART_COUNT, count, { expires: new Date(now.getTime() + parseInt(process.env.REACT_APP_COOKIES_EXPIRES_MINUTES) * 60000) })
      goBack()
    }
  }, [data])

  return (
    <div className={styles.productContainer}>
      <div className={styles.detailsContainer}>
        <h2>Detalles del Producto</h2>
        <p><b>Marca:</b> {product.brand}</p>
        <p><b>Modelo:</b> {product.model}</p>
        <p><b>Precio:</b> {product.price ? `${product.price} euros` : '-'}</p>
        <p><b>CPU:</b> {product.cpu}</p>
        <p><b>RAM:</b> {product.ram}</p>
        <p><b>OS:</b> {product.os}</p>
        <p><b>Resolución:</b> {product.displayResolution}</p>
        <p><b>Batería:</b> {product.battery}</p>
        <p><b>Camara Primaria:</b> {product.primaryCamera.join(',')}</p>
        <p><b>Camara Secundaria:</b> {product.secondaryCmera}</p>
        <p><b>Dimensiones:</b> {product.dimentions}</p>
        <p><b>Peso:</b> {product.weight ? `${product.weight} gramos` : '-'}</p>
      </div>
      <div className={styles.actionsContainer}>
        <h2>Agregar al carrito</h2>
        <Select name="storages" value={storage} options={product.options.storages} onChangeSelect={(event) => setStorage(parseInt(event.target.value))} />
        <Select name="colors" value={color} options={product.options.colors} onChangeSelect={(event) => setColor(parseInt(event.target.value))} />
        <div style={{ display: 'flex' }}>
          <Button text="Comprar" onClick={postData} />
          <Button text="Volver" onClick={goBack} />
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.array,
    secondaryCmera: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
    options: PropTypes.object
  })
}

ProductDetails.defaultProps = {
  cookies: {},
  product: PropTypes.shape({
    id: '',
    brand: 'Sin información',
    model: 'Sin información',
    price: 'Sin información',
    cpu: 'Sin información',
    ram: 'Sin información',
    os: 'Sin información',
    displayResolution: 'Sin información',
    battery: 'Sin información',
    primaryCamera: ['Sin información'],
    secondaryCmera: 'Sin información',
    dimentions: 'Sin información',
    weight: 'Sin información',
    option: {
      colors: [],
      storages: []
    }
  })
}

export default withCookies(ProductDetails)
