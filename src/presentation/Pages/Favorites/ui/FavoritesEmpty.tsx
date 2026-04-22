import { Link } from 'react-router-dom'

const FavoritesEmpty = () => {
  return (
    <section className=" flex flex-col gap-12 justify-center items-center text-center h-100   ">
            <p className=" text-xs md:text-lg ">No tienes productos en favoritos ❤️ <br /> Pincha aqui debajo 👇 para encontrarlos </p>
            <Link to={'/'} className=' py-2 px-4 rounded-lg border border-secondary-gray shadow-md/30 '>Explorar Productos</Link>
    </section>
  )
}

export default FavoritesEmpty