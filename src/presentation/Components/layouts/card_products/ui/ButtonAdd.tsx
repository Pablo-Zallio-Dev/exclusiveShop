import type { Product } from "../../../../../domain/entities/Product.entities"
import { CartStore } from "../../../../../store/Cart.store"

const ButtonAdd = ({item}: {item:Product}) => {
            const addProductCart = CartStore((state) => state.addProductToCart)
      
  return (
      <button className=" md:absolute md:-bottom-48 md:group-hover:-translate-y-48 transition-transform duration-150 w-full py-2 bg-black text-xxs text-white " onClick={() => addProductCart(item)}>
            Añadir al Carrito
      </button>
  )
}

export default ButtonAdd