import { Navigate, Route, Routes } from "react-router-dom"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Home from "../Pages/Home/Home"
import Signup from "../Pages/Signup/Signup"
import ProductDescrption from "../Pages/Description_Product/ProductDescrption"
import Cart from "../Components/layouts/layout_cart/Cart"
import Favorites from "../Pages/Favorites/Favorites"
import { ProductStore } from "../../store/Product.store"
import GallerySearch from "../Pages/Search/GallerySearch"

const AppRouter = () => {

            const productSearch = ProductStore((state) => state.productSearch)

      return (

          <>

          {
            productSearch.length > 0 
                  ? <GallerySearch />
                  : <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/descproduct" element={ <ProductDescrption /> } />
                  <Route path="/cart" element={ <Cart /> } />
                  <Route path="/favorites" element={ <Favorites /> } />
                  
                  <Route path="/*" element={<Navigate to='/' />} />
            </Routes>
          }
          
            
          </>

      )
}

export default AppRouter