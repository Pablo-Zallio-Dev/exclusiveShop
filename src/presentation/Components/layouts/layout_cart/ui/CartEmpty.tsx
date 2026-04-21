import { Link } from 'react-router-dom'
import  cartEmpty from '../../../../../assets/icons/icon-cart_empty.png'
const CartEmpty = () => {
  return (
    <section className=" flex items-center justify-center md:gap-36 lg:py-12 py-6  ">
            <img src={cartEmpty} alt="" className=' w-6/12 max-w-lg ' />
            <section className=" flex flex-col gap-3 lg:gap-18 text-xxs md:text-sm lg:text-2xl ">
                  <h2 className='  font-semibold text-center '>Tu cesta de Exclusive está vacía</h2>
                  <p className="  ">Comienza a explorar los productos</p>
                  <Link to='/' className=' p-1.5  bg-red text-white text-center rounded-sm '>¡Todos los productos aqui!</Link>
            </section>
    </section>
  )
}

export default CartEmpty