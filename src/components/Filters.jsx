/* eslint-disable react/prop-types */
import { useFilters } from '../hooks/useFilters.jsx'
import { useId } from 'react'
import './Filters.css'

export const Filters = () => {
  const { setFilters, filters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState, 
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          type="range" 
          name="price" 
          id={minPriceFilterId}
          min={'0'}
          max={'1000'} 
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
          <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Laptops</option>\
            <option value="smartphones">Teléfonos</option>
          </select>
      </div>
    </section>
  )
}
