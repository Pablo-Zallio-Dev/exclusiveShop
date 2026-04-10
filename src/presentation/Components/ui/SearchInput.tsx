import iconSearch from '../../../assets/icons/icon_zoom.svg'
const SearchInput = () => {
      return (
            <section className=" flex items-center justify-center  ">
                  <section className=" flex justify-around py-1 px-8 md:py-2 w-64 md:w-lg rounded-sm bg-secondary-gray">
                        <input type="text" placeholder='¿Qué estás buscando?' className=' w-full text-xs md:text-sm focus:outline-none ' />
                        <img src={iconSearch} alt=" icono de busqueda " className='w-5' />
                  </section>
            </section>
      )
}

export default SearchInput