/* eslint-disable react/prop-types */
import { useCarrito } from '../hooks/useCarrito'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { addToCart, removeCart, cart } = useCarrito()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isProdcutInCart = checkProductInCart(product)

            return(
                <li key={product.id}>
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  />
                <div>
                  <strong>{ product.title }</strong> - ${product.price}
                </div>
                <div>
                  <button 
                  style={{ backgroundColor: isProdcutInCart ? 'red' : '#09f'}}

                  onClick={ () => {
                    isProdcutInCart 
                    ? removeCart(product)
                    : addToCart(product)
                  }
                  }
                    >
                    {
                      isProdcutInCart 
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}