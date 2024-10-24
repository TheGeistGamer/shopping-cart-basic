import { CartContext } from '../context/carrito.jsx'
import { useContext } from 'react'

export const useCarrito = () => {
  const carrito = useContext(CartContext) 

  if (carrito === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return carrito
}
