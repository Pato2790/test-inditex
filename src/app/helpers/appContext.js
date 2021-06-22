import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { reducer } from './appReducer'
import { ADD_PRODUCT_TO_CART, CART_COUNT } from './constants'

const AppContext = React.createContext({})

const AppProvider = ({ children, cookies }) => {
  const initialState = {
    cartCount: cookies.cookies[CART_COUNT] ? cookies.cookies[CART_COUNT] : 0
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const filtersValue = {
    cartCount: state.cartCount,
    addProductToCart: (value) => { dispatch({ type: ADD_PRODUCT_TO_CART, payload: value }) }
  }

  return (
    <AppContext.Provider value={filtersValue}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  children: PropTypes.node.isRequired
}

AppProvider.defaultProps = {
  cookies: {}
}

export default withCookies(AppProvider)

export { AppContext }
