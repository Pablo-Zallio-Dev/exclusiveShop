import { Link } from "react-router-dom"


const App = () => {
  return (
    <>
    <nav className="">
      <Link to='/'> Home </Link>
      <Link to='/contact'> Contacto </Link>
      <Link to='/about'> nosotros </Link>
    </nav>
      
    </>
  )
}

export default App