import HeroImage from "../../Components/layouts/HeroImage"
import OffersProduct from "../../Components/layouts/OffersProduct"
import SliderCategories from "../../Components/layouts/SliderCategories"

const Home = () => {


      return (
            <>

                  <HeroImage />
                  <section className=" px-6 md:px-18 lg:px-32  ">
                        <OffersProduct />
                        <SliderCategories />


                  </section>


            </>
      )
}

export default Home