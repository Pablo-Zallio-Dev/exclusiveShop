import { Link } from "react-router-dom"
import iconHome from '../../../assets/icons/icon-home.svg'
import iconContact from '../../../assets/icons/icon-send.svg'
import iconAbout from '../../../assets/icons/icon-about.svg'
import iconRegister from '../../../assets/icons/icon-signin.svg'
const Navbar = () => {
      return (

            <nav className=" navbar  ">
                  <Link className=" link__navbar  " to='/'>
                        <img src={iconHome} alt="" className=" w-5.5 md:hidden " />
                        <p className="  transition-all duration-400 ">Inicio</p>
                  </Link>
                  <Link className=" link__navbar " to='/contact'>
                        <img src={iconContact} alt="" className=" w-5.5 md:hidden " />
                        <p className="  ">Contacto</p>
                  </Link>
                  <Link className=" link__navbar " to='/about'>
                        <img src={iconAbout} alt="" className=" w-5.5 md:hidden " />
                        <p className="  ">Nosotros</p>
                  </Link>
                  <Link className=" link__navbar " to='/signup'>
                        <img src={iconRegister} alt="" className=" w-5.5 md:hidden " />
                        <p className="  ">Registrate</p>
                  </Link>

            </nav>
      )
}

export default Navbar