import { useState, type KeyboardEvent } from 'react'
import iconSearch from '../../../assets/icons/icon_zoom.svg'
import { ProductStore } from '../../../store/Product.store'
import { useNavigate } from 'react-router-dom';


const SearchInput = () => {
      const navigate = useNavigate();
      const getProductSearch = ProductStore((state) => state.fetchProductSearch)
      /*  const productSearch = ProductStore((state) => state.productSearch)*/
       const clearProductSearch = ProductStore((state) => state.clearProductSearch) 

      const [query, setQuery] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      clearProductSearch();
      navigate('/');
    }
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      getProductSearch(query);
      navigate('/search');
    }
  };

      const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                  handleSearch();
            }
      };



      return (
            <section className=" col-span-3 pt-2 lg:pt-6  ">
                  <section className=" flex py-2 md:py-2 px-2 w-64 md:w-lg rounded-sm bg-secondary-gray">
                        <input type="text" placeholder='¿Qué estás buscando?' className=' w-full text-xs md:text-sm focus:outline-none ' value={query}
                              onChange={handleChange} // Solo actualiza el texto
                              onKeyDown={handleKeyDown} />
                        <img src={iconSearch} alt=" icono de busqueda " className='w-5' onClick={handleSearch} />
                  </section>

            </section>
      )
}

export default SearchInput



/* 
      const productsForSearch = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === '') {
                  clearProductSearch()
                  navigate('/')
            } else {
                  getProductSearch(e.target.value)
                  navigate('/search')
            }
      }

      console.log(productSearch.length)
 */