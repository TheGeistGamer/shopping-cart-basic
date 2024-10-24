/* eslint-disable react/prop-types */
import {CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCarrito } from '../hooks/useCarrito.jsx'
import { useId } from 'react'
import './Carrito.css'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {

  return (
    <li>
      <img src={thumbnail} alt={title} />

      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export const Carrito = () => {
  const cartCheckboxId = useId()

  const {cart, clearCart, addToCart} = useCarrito()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>

      <input 
        type="checkbox" 
        id={cartCheckboxId}
        hidden
      />

      <aside className='cart'>
        <ul>
          {
            cart.map((product) => {

              return(
                <CartItem 
                key={product.id} 
                {...product} 
                addToCart={() => addToCart(product)}
              />
              )
            })
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>

      </aside>
    
    </>
  )
}


