import { Link } from "react-router-dom"
import CartDetails from "./ui/CartDetails"

const Cart = () => {
      return (
            <section className="px-6 md:px-18 lg:px-32 ">
                  <div className=" py-20 text-sm hidden md:block ">
                        <Link to='/'>Inicio / </Link>
                        <span className=" font-semibold "> Carrito</span>
                  </div>
                  <CartDetails />
                  
            </section>
      )
}

export default Cart     