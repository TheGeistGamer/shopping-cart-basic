/* eslint-disable react/prop-types */
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../types/types.js'
import { cartReducer, initialState } from '../reducers/cart.js'
import { createContext, useReducer } from 'react'

// 1. Crear contexto
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product
    })
  }

  const removeCart = (product) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART
    })
  }

  return {
    state,
    addToCart,
    removeCart,
    clearCart
  }
}

// 2. Crear Provider
export function CartProvider ({ children }) {
  const { state, addToCart, clearCart, removeCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

