import { Link } from "react-router-dom"
import iconHome from '../../../assets/icons/icon-home.svg'
import iconContact from '../../../assets/icons/icon-send.svg'
import iconAbout from '../../../assets/icons/icon-about.svg'
import iconRegister from '../../../assets/icons/icon-signin.svg'
const Navbar = () => {
      return (

            <nav className=" navbar z-500  ">
                  <Link className=" link__navbar  " to='/'>
                        <img src={iconHome} alt="" className=" w-5.5 md:hidden " />
                        <p className="  font-semibold md:font-normal ">Inicio</p>
                  </Link>
                  <Link className=" link__navbar " to='/contact'>
                        <img src={iconContact} alt="" className=" w-5.5 md:hidden " />
                        <p className=" font-semibold md:font-normal ">Contacto</p>
                  </Link>
                  <Link className=" link__navbar " to='/about'>
                        <img src={iconAbout} alt="" className=" w-5.5 md:hidden " />
                        <p className=" font-semibold md:font-normal ">Nosotros</p>
                  </Link>
                  <Link className=" link__navbar " to='/signup'>
                        <img src={iconRegister} alt="" className=" w-5.5 md:hidden " />
                        <p className=" font-semibold md:font-normal ">Registrate</p>
                  </Link>

            </nav>
      )
}

export default Navbar