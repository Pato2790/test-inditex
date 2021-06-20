import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../api'
import ProductDetails from '../productDetails'
import styles from './detailsView.module.css'

const DetailsView = () => {
  const { id } = useParams()
  const [product, loading] = useFetch('api/product', id)

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <>
      <div className={styles.container}>
        {
          loading
            ? <p>Loading</p>
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
