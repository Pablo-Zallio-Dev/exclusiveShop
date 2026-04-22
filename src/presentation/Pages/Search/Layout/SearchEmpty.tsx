import React from 'react'
import { Link } from 'react-router-dom'

const SearchEmpty = (  ) => {
  return (
    <section className=" flex flex-col justify-center items-center gap-4 py-58 ">

            <p className=" text-5xl font-semibold "> Lo sentimos 😪 </p>
            <p className=" text-2xl ">No hemos podido encontrar tu producto</p>
            <p className=" text-2xl "> 🔍 Lo encontraremos para la proxima</p>
            <Link to={'/'} className=' py-2 px-6 mt-10 rounded-sm text-xl shadow-md/50 '> Volver </Link>

    </section>
  )
}

export default SearchEmpty