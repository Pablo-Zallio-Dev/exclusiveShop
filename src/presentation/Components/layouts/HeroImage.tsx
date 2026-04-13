import { useBannerInterval } from "../../../hooks/useBannerInterval"
import { ProductStore } from "../../../store/Product.store"


const HeroImage = () => {

      const fetchProductImages = ProductStore((state) => state.fetchProductMultipleImages)
      const productImages = ProductStore((state) => state.productMultipleImages)
      //const isLoading = ProductStore((state) => state.isLoading)

      const { currentProduct } = useBannerInterval(fetchProductImages, productImages, 6000)
      console.log(currentProduct)

      if (!currentProduct) {
            return <p className="animate-pulse">Cargando banner...</p>;
      }
      return (
            <>
                  <section className=" flex justify-center items-center  py-8 ">

                        <section className="  w-5/6 max-w-222.5 flex justify-center md:justify-around gap-1 items-center p-3 md:py-12 bg-black rounded-md text-white ">
                              <section className=" text-center ">
                                    <p className=" text-xxs md:text-lg "> {currentProduct.title} </p>
                                    <p className=" text-sm md:text-3xl font-black md:font-bold ">Hasta un 10% descuento</p>
                              </section>
                              <section className=" ">
                              <img src={currentProduct.images[0]} alt="" className=" h-30 md:h-58 object-contain animate-opacity-product " />
                                    
                              </section>

                        </section>

                  </section>

            </>
      )
}

export default HeroImage

