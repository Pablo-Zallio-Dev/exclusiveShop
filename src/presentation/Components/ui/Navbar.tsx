import { Link } from "react-router-dom"

const Navbar = () => {
  return (

    <nav className="">
      <Link to='/'> Home </Link>
      <Link to='/contact'> Contacto </Link>
      <Link to='/about'> Nosotros </Link>
      <Link to='/signup'> Resgistrate </Link>
    </nav>
  )
}

export default Navbar