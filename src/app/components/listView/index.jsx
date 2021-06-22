import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGet } from '../../api'
import { PRODUCTS_GET } from '../../api/constants'
import { DETAILS } from '../../router/constants'
import Item from '../item'
import Search from '../search'
import Loading from '../../componentsStyles/loading'
import styles from './listView.module.css'

const ListView = () => {
  const [productsList, loading] = useGet(PRODUCTS_GET)
  const [searchText, setSearchText] = useState('')
  const history = useHistory()

  const showItemDetails = (idItem) => {
    history.push(`${DETAILS}/${idItem}`)
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
          ? <Loading body={'Obteniendo todos los productos...'}/>
          : filertProduct()
      }
    </div>
  )
}

export default ListView
