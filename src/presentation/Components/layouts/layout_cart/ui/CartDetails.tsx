import { CircleMinus, CirclePlus, X } from 'lucide-react'
import { CartStore } from '../../../../../store/Cart.store'
import CartEmpty from './CartEmpty'
import PriceTotalCart from './PriceTotalCart'

const CartDetails = () => {

      const cartItems = CartStore((state) => state.cartItems)
      const incrementQuantity = CartStore((state) => state.incrementQuantity)
      const decrementQuantity = CartStore((state) => state.decrementQuantity)
      const clearProduct = CartStore((state) => state.clearProduct)
     

      return (
            <section className=" mb-12     ">

                  {
                        cartItems.length > 0
                              ? <>
                                    <section className=" grid grid-cols-4 justify-items-center px-2 py-6 my-6 text-xxs md:text-sm border border-secondary-gray shadow-sm/20 ">
                                          <h2 className="">Producto</h2>
                                          <h2 className="">Precio</h2>
                                          <h2 className="">Cantidad</h2>
                                          <h2 className="">Subtotal</h2>
                                    </section>

                                    {cartItems.map((item) => (
                                          <section className=" grid grid-cols-4 items-center justify-items-center px-2 py-3 my-6 text-xxs md:text-sm border border-secondary-gray shadow-sm/20 ">
                                                <section className=" relative group ">
                                                      <img src={item.product.images[0]} alt="" className=' w-12 ' />
                                                      <X size={16} color="#ffffff" className=" absolute top-0 bg-red w-5 h-5 p-0.5 rounded-full opacity-0  group-hover:opacity-100 transition-all duration-150 " onClick={() => clearProduct(item.product.id)} />

                                                </section>
                                                <p className=""> {item.product.price}€ </p>
                                                <section className=" flex items-center justify-around w-5/6 ">
                                                      <CirclePlus size={16} onClick={() => incrementQuantity(item.product.id)} />
                                                      <p className=" text-sm "> {item.quantity} </p>
                                                      <CircleMinus size={16} onClick={() => decrementQuantity(item.product.id)} />
                                                </section>
                                                <p className=""> {(item.product.price * item.quantity).toFixed(2)}€ </p>
                                          </section>
                                    ))

                                    }
                                    <PriceTotalCart />
                              </>
                              : <CartEmpty />
                  }

                  


            </section>
      )
}

export default CartDetails