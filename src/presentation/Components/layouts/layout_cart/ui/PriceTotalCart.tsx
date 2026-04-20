import { Link } from 'react-router-dom'
import { CartStore } from '../../../../../store/Cart.store'

const PriceTotalCart = () => {
       const getTotalprice = CartStore((state) => state.getTotalPrice)

     const totalPrice = ((getTotalprice()).toFixed(2))

  return (
    <section className=" flex flex-col md:flex-row md:items-start md:justify-between gap-4 pt-8 ">

            <Link to={'/'} className=' w-max py-1.5 px-2.5 text-xxs md:text-sm border border-black  ' > ¡Continuar comprando 🛒! </Link>
            <section className=" flex flex-col gap-4 md:w-4/6 md:max-w-160 p-5 border border-black ">
                  <h2 className=' text-xs md:text-lg font-semibold '>Total</h2>
                  <div className=" flex justify-between pb-1.5 text-xxs md:text-sm border-b border-black ">
                        <p className="  ">Total</p>
                        <p className=""> {totalPrice}€ </p>
                  </div>
            </section>
    </section>
  )
}

export default PriceTotalCart