import { FavoriteStore } from '../../../store/Favorite.store'
import CardProducts from '../../Components/layouts/card_products/CardProducts'
import TitleSection from '../../Components/ui/TitleSection'
import FavoritesEmpty from './ui/FavoritesEmpty'

const Favorites = () => {

      const favoritesProducts = FavoriteStore((state) => state.favorites)
      return (
            <>
                  <section className="px-10 md:px-18 lg:px-32 py-24">


                        {
                              favoritesProducts.length > 0
                                    ? <>
                                          <TitleSection titleText='Favoritos' />
                                          <section className=" grid grid-cols-2 md:grid-cols-3 justify-items-center gap-24 pt-12 ">
                                                {
                                                      favoritesProducts.map((product) => (
                                                            <CardProducts prod={product} />
                                                      ))
                                                }
                                          </section>
                                    </>
                                    : <>
                                          <FavoritesEmpty />
                                    </>
                        }


                  </section>
            </>
      )
}

export default Favorites