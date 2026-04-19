import AllProducts from "../../Components/layouts/AllProducts"
import BannerProducts from "../../Components/layouts/banner/BannerProducts"
import HeroImage from "../../Components/layouts/HeroImage"
import OffersProduct from "../../Components/layouts/OffersProduct"
import ProductsByCategory from "../../Components/layouts/ProductsByCategory"
import SliderCategories from "../../Components/layouts/SliderCategories"

const Home = () => {


      return (
            <>

                  <HeroImage />
                  <section className=" px-6 md:px-18 lg:px-32  ">
                        <OffersProduct />
                        <SliderCategories />
                        <ProductsByCategory />
                        <BannerProducts />
                        <AllProducts />

                  </section>


            </>
      )
}

export default Home