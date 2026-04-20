import iconUser from '../../../assets/icons/icon_user.svg'
import iconCart from '../../../assets/icons/icon_cart.svg'
import iconFavorite from '../../../assets/icons/icon_favorite.svg'
import BadgeCart from '../layouts/layout_cart/ui/BadgeCart'
import { Link } from 'react-router-dom'


const NavSocial = () => {

      
      return (
            <section className=" flex gap-2 col-span-1 col-start-3 lg:gap-6 ">
                  <img src={iconFavorite} alt=" icono para de favoritos " className=" icon__social  w-6 " />
                  <Link to="/cart" className=" relative" >
                        <img src={iconCart} alt="icono del carrito" className=" icon__social  w-6 " />
                        <BadgeCart />
                  </Link >
                  <img src={iconUser} alt="icono de usuario" className=" icon__social  w-6 " />
                 
            </section>
      )
}

export default NavSocial