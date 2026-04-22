import Logo from "../ui/Logo"
import Navbar from "../ui/Navbar"
import NavSocial from "../ui/NavSocial"
import SearchInput from "../ui/SearchInput"
import TopBar from "../ui/TopBar"

const Header = () => {
  return (
    
    <section className=" md:fixed md:z-3000 md:backdrop-blur-2xl md:bg-white/50 pb-4 border-b border-border-line  ">
      <TopBar/>
      <section className=" grid grid-cols-3 justify-items-center items-center gap-4  w-full py-4 px-2 lg:py-8 ">
            <Logo />
            <Navbar />
            <NavSocial />
            <SearchInput />
      </section>
    </section>
    
  )
}

export default Header