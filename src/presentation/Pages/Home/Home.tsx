import AllProducts from "../../Components/layouts/AllProducts"
import BannerProducts from "../../Components/layouts/banner/BannerProducts"
import HeroImage from "../../Components/layouts/HeroImage"
import OffersProduct from "../../Components/layouts/OffersProduct"
import ProductsByCategory from "../../Components/layouts/ProductsByCategory"
import RatedProducts from "../../Components/layouts/RatedProducts"
import ServiceSection from "../../Components/layouts/ServiceSection"
import SliderCategories from "../../Components/layouts/SliderCategories"

const Home = () => {


      return (
            <>

                  <section className=" px-6 md:px-18 lg:px-32 pt-50 md:pt-0  ">
                        <HeroImage />
                        <OffersProduct />
                        <SliderCategories />
                        <ProductsByCategory />
                        <BannerProducts />
                        <AllProducts />
                        <RatedProducts />
                        <ServiceSection />
                  </section>


            </>
      )
}

export default Home