import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../api/index'
import Item from '../item'
import Search from '../search'
import styles from './listView.module.css'

const ListView = () => {
  const [productsList, loading] = useFetch('api/product')
  const [searchText, setSearchText] = useState('')
  const history = useHistory()

  const showItemDetails = (idItem) => {
    history.push(`/details/${idItem}`)
  }

  const onSearchTextChange = ({ target }) => {
    setSearchText(target.value.toLowerCase())
  }

  const filertProduct = () => {
    const filteredProducts = productsList
      .filter((product) => searchText.length === 0 ? product : product.brand.toLowerCase().includes(searchText) || product.model.toLowerCase().includes(searchText))

    return filteredProducts.length === 0
      ? <h1>No Products</h1>
      : <div className={styles.gridItems}>
        {
          filteredProducts.map((item) => {
            return <Item key={item.id} item={item} onItemSelected={() => showItemDetails(item.id)} />
          })
        }
      </div>
  }

  return (
    <div className={styles.container}>
      <h1>Lista de Productos</h1>
      <Search searchText={searchText} onSearchTextChange={onSearchTextChange} />
      {
        loading
          ? <p>Loading</p>
          : filertProduct()
      }
    </div>
  )
}

export default ListView
