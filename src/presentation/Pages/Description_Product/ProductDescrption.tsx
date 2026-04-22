import { Link, useLocation } from "react-router-dom"
import type { Product } from "../../../domain/entities/Product.entities"
import StartRating from "../../Components/layouts/card_products/ui/StartRating"
import { Heart } from "lucide-react"
import { FavoriteStore } from "../../../store/Favorite.store"
import { CartStore } from "../../../store/Cart.store"

interface DataProduct {
      data: Product
}

const ProductDescrption = () => {

      const addProductCart = CartStore((state) =>state.addProductToCart)

      const location = useLocation()
      const data = location.state as DataProduct
      console.log(data)

      if (!data || !data.data) {
            return (
                  <section className="px-6 md:px-32 py-20 text-center">
                        <p>No se encontró la información del producto.</p>
                        <Link to="/" className="text-red underline">Volver al inicio</Link>
                  </section>
            );
      }
      const toggleFavorite = FavoriteStore((state) => state.toggleFavorite)

      const isFav = FavoriteStore((state) => state.isFavorite(data.data.id));


      return (
            <section className=" px-6 md:px-18 lg:px-32 pb-12 pt-50 md:pt-60  ">
                  <div className=" py-10 text-xs md:block ">
                        <Link to='/'>Inicio / </Link>
                        <span className=" font-semibold "> {data.data.title} </span>
                  </div>
                  <section className=" flex flex-col md:flex-row items-center gap-6 lg:gap-18 max-w-250 mx-auto md:py-20 ">
                        <section className=" flex flex-wrap items-center justify-around gap-4 md:gap-10">
                              {
                                    data.data.images.map((img) => (
                                          <img src={img} alt="" className="w-26 md:w-38 hover:scale-190 transition-transform duration-250 " />
                                    ))
                              }
                        </section>
                        <section className=" max-w-140 ">
                              <p className=" text-xs md:text-lg font-semibold "> {data.data.title} </p>
                              <section className=" flex items-center gap-3 ">
                                    <StartRating rating={data.data.rating} />
                                    <p className="">|</p>
                                    <p className={` text-xs ${data.data.status === 'In Stock' ? 'text-green-600' : ' text-red'} `}>{data.data.status} </p>
                              </section>
                              <p className=""> {data.data.price}€ </p>
                              <p className=" py-3 text-xxs md:text-sm "> {data.data.description} </p>

                              <section className=" relative flex gap-2 py-3 ">
                                    <button className="  w-full py-2 bg-black text-xxs md:text-xs text-white " onClick={() => addProductCart(data.data)}>
                                          Añadir al Carrito
                                    </button>
                                    <section className={` p-1.5 border ${isFav ? 'bg-red' : 'bg-white'} `} onClick={() => toggleFavorite(data.data)}>
                                          <Heart className=" w-3.5 md:w-4.5 h-3.5 md:h-4.5  " />
                                    </section>
                              </section>
                        </section>
                  </section>

            </section>
      )
}

export default ProductDescrption