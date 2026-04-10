import { Navigate, Route, Routes } from "react-router-dom"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Home from "../Pages/Home/Home"

const AppRouter = () => {
      return (
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/*" element={<Navigate to='/' />} />
            </Routes>
      )
}

export default AppRouter