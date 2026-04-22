import iconUser from '../../../assets/icons/icon_user.svg'
import iconCart from '../../../assets/icons/icon_cart.svg'
import iconFavorite from '../../../assets/icons/icon_favorite.svg'
import BadgeCart from '../layouts/layout_cart/ui/BadgeCart'
import { Link } from 'react-router-dom'
import { CartStore } from '../../../store/Cart.store'
import { FavoriteStore } from '../../../store/Favorite.store'


const NavSocial = () => {

      const total = CartStore((state) => state.getTotalItems());
      const totalFavorite = FavoriteStore((state) => state.favorites.length)




      return (
            <section className=" flex gap-2 col-span-1 col-start-3 lg:gap-6 ">
                  <Link to={'/favorites'} className='relative'>
                        <img src={iconFavorite} alt=" icono para de favoritos " className=" icon__social  w-6 " />
                        <BadgeCart total={totalFavorite} />
                  </Link>
                  <Link to="/cart" className=" relative" >
                        <img src={iconCart} alt="icono del carrito" className=" icon__social  w-6 " />
                        <BadgeCart total={total} />
                  </Link >
                  <img src={iconUser} alt="icono de usuario" className=" icon__social  w-6 hidden " />

            </section>
      )
}

export default NavSocial