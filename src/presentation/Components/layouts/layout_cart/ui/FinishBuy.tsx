import { useEffect } from "react"
import { CartStore, type CartItem } from "../../../../../store/Cart.store"
import iconsCards from '../../../../../assets/icons/icons-cards.png'
import toast, { Toaster } from "react-hot-toast"

interface Portal {
      isOpen: boolean,
      onClose: () => void,
      cartItems: CartItem[]
}

const FinishBuy = ({ isOpen, onClose, cartItems }: Portal) => {
      const getTotalprice = CartStore((state) => state.getTotalPrice)
      const clearCart = CartStore((state) => state.clearCart)

      const totalPrice = ((getTotalprice()).toFixed(2))

      console.log(cartItems)

      useEffect(() => {
            if (isOpen) {
                  document.body.style.overflow = 'hidden'; // Bloquea el fondo
            } else {
                  document.body.style.overflow = 'unset';
            }

            return () => {
                  document.body.style.overflow = 'unset'; // Limpieza al desmontar
            };
      }, [isOpen])

      const handleFinalize = () => {
            toast.success('Pedido realizado con exito!', {
                  duration: 2000,
                  icon: '👏'
            })
            setTimeout(() => {
                  onClose();
                  clearCart();
            }, 2500);

      };



      return (
            <section className=" fixed top-0 left-0 flex justify-center items-center w-full h-screen px-4 bg-secondary-gray/50 ">
                  <section className="  bg-white py-8 ">
                        {
                              cartItems.map((product) => (
                                    <section className=" grid grid-cols-4 justify-items-center items-center gap-2  text-xxs md:text-sm ">
                                          <img src={product.product.images[0]} alt="" className=" w-16 " />
                                          <p className=" "> {product.product.title} </p>
                                          <p className=""> X {product.quantity} </p>
                                          <p className=""> {(product.product.price * product.quantity).toFixed(2)} </p>
                                    </section>
                              ))
                        }
                        <section className=" flex justify-around mt-12 mb-6 pb-2 border-b border-secondary-gray text-xxs  md:text-sm  ">
                              <p className="">Total:</p>
                              <p className=""> {totalPrice} </p>
                        </section>
                        <section className=" flex justify-end px-12 ">
                              <img src={iconsCards} alt="" className=" w-32 md:w-48 " />
                        </section>
                        <div className=" flex justify-center ">
                              <button className=" bg-red py-2 px-3 my-10 text-white font-semibold rounded-md " onClick={handleFinalize}>Realizar Pedido</button>
                        </div>
                  </section>

                  <Toaster
                        position="top-center"
                        reverseOrder={false}
                  />

            </section>
      )
}

export default FinishBuy