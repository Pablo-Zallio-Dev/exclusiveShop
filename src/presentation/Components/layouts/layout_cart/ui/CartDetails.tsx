import { CircleMinus, CirclePlus, X } from 'lucide-react'
import { CartStore } from '../../../../../store/Cart.store'
import CartEmpty from './CartEmpty'
import PriceTotalCart from './PriceTotalCart'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import FinishBuy from './FinishBuy'

const CartDetails = () => {

      const cartItems = CartStore((state) => state.cartItems)
      const incrementQuantity = CartStore((state) => state.incrementQuantity)
      const decrementQuantity = CartStore((state) => state.decrementQuantity)
      const clearProduct = CartStore((state) => state.clearProduct)

      console.log(cartItems)

      const [finishBuy, setFinishBuy] = useState(false)





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
                                                      <img src={item.product.images[0]} alt="" className=' w-12 md:w-22 ' />
                                                      <X size={16} color="#ffffff" className=" absolute top-0 md:left-4 bg-red w-5 h-5 p-0.5 rounded-full opacity-0  group-hover:opacity-100 transition-all duration-150 " onClick={() => clearProduct(item.product.id)} />

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
                                    <section className=" flex justify-center py-24 ">
                                          <button className=' py-2 px-4 rounded-lg bg-red/80 shadow-md/30 md:cursor-pointer md:hover:scale-110 transition-transform duration-200 ' onClick={() => setFinishBuy(true)}> Finalizar compra 🎉</button>
                                    </section>
                              </>
                              : <CartEmpty />
                  }
                   
                  {
                        finishBuy && createPortal(
                              <FinishBuy isOpen={finishBuy} onClose={() => setFinishBuy(false)} cartItems={cartItems} />,
                              document.body
                        )
                  }




            </section>
      )
}

export default CartDetails