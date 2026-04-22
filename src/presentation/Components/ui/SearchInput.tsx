import type { ChangeEvent } from 'react'
import iconSearch from '../../../assets/icons/icon_zoom.svg'
import { ProductStore } from '../../../store/Product.store'
const SearchInput = () => {

      const getProductSearch = ProductStore((state) => state.fetchProductSearch)
      const productSearch = ProductStore((state) => state.productSearch)
      const clearProductSearch = ProductStore((state) => state.clearProductSearch)

      const productsForSearch = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === '') {
                  clearProductSearch()
            } else {
                  getProductSearch(e.target.value)

            }
      }

      console.log(productSearch.length)


      return (
            <section className=" col-span-3 pt-2 lg:pt-6  ">
                  <section className=" flex py-2 md:py-2 px-2 w-64 md:w-lg rounded-sm bg-secondary-gray">
                        <input type="text" placeholder='¿Qué estás buscando?' className=' w-full text-xs md:text-sm focus:outline-none ' onChange={productsForSearch} />
                        <img src={iconSearch} alt=" icono de busqueda " className='w-5' />
                  </section>

            </section>
      )
}

export default SearchInput