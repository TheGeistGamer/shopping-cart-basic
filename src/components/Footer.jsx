/* eslint-disable react/prop-types */
// import { useCarrito } from '../hooks/useCarrito'
// import { useFilters } from '../hooks/useFilters'
import './footer.css'

export const Footer = () => {
  // const { filters } = useFilters()
  // const { cart } = useCarrito()


  return (
    <footer className='footer'>

      {/* {
        JSON.stringify(filters, null, 2)
      } */}

      {/* {
        JSON.stringify(cart, null, 2)
      } */}

      <h4>Prueba técnica de React<span>@midudev</span></h4>
      <h5>hopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
