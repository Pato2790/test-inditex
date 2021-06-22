import { ADD_PRODUCT_TO_CART } from './constants'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartCount: action.payload
      }
    default:
      return state
  }
}

export { reducer }
