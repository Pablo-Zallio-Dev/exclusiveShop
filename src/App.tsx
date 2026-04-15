import Footer from "./presentation/Components/layouts/Footer"
import Header from "./presentation/Components/layouts/Header"
import AppRouter from "./presentation/Router/AppRouter"




const App = () => {
      return (
            <>
                  <Header />
                  <AppRouter />
                  <Footer />
            </>
      )
}

export default App