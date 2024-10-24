import {products as initialProducts} from './mocks/products.json'
import { Products } from './components/Products.jsx' 
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'
import { Carrito } from './components/Carrito'
import { CartProvider } from './context/carrito'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Carrito />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App