import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGet } from '../../api'
import { PRODUCTS_GET } from '../../api/constants'
import ProductDetails from '../productDetails'
import Loading from '../../componentsStyles/loading'
import styles from './detailsView.module.css'

const DetailsView = () => {
  const { id } = useParams()
  const [product, loading] = useGet(PRODUCTS_GET, id)

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <>
      <div className={styles.container}>
        {
          loading
            ? <Loading body={'Obteniendo detalles del producto...'}/>
            : <div className={styles.itemContainer}>
              <img src={product.imgUrl} className={styles.imgSize}/>
              <ProductDetails product={product} />
            </div>
        }
      </div>
    </>
  )
}

export default DetailsView
