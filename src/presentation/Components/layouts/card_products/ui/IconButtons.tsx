import { Eye, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import type { Product } from "../../../../../domain/entities/Product.entities";
import { FavoriteStore } from "../../../../../store/Favorite.store";

const IconButtons = ( {prod}: {prod: Product} ) => {

      const toggleFavorite = FavoriteStore((state) => state.toggleFavorite)
      const isFav = FavoriteStore((state) => state.isFavorite(prod.id));



      return (
            <section className=" flex flex-col gap-2   ">
                  <section className={` p-1.5 rounded-full ${ isFav  ?'bg-red': 'bg-white' } `} onClick={() => toggleFavorite(prod)}>
                        <Heart  className=" w-3.5 md:w-4.5 h-3.5 md:h-4.5  " />
                  </section>

                  <Link to="/descproduct" className=" p-1.5 bg-white rounded-full ">
                        <Eye className=" w-3.5 md:w-4.5 h-3.5 md:h-4.5 " />
                  </Link>
                 
            </section>
      )
}

export default IconButtons

