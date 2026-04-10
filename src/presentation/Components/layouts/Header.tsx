import Logo from "../ui/Logo"
import Navbar from "../ui/Navbar"
import NavSocial from "../ui/NavSocial"
import SearchInput from "../ui/SearchInput"
import TopBar from "../ui/TopBar"

const Header = () => {
  return (
    
    <section className=" pb-4 border-b border-border-line  ">
      <TopBar/>
      <section className=" flex justify-around items-center py-4 lg:py-8 ">
            <Logo />
            <Navbar />
            <NavSocial />
      </section>
      <SearchInput />
    </section>
    
  )
}

export default Header