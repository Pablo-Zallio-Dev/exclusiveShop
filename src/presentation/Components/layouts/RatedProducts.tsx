import { useEffect } from "react"
import { ProductStore } from "../../../store/Product.store"
import TitleSection from "../ui/TitleSection"
import { ProductSlider } from "../ui/ProductSlider"

const RatedProducts = () => {

      const fetchTopRated = ProductStore((state) => state.fetchTopRatedList)
      const topRatedList = ProductStore((state) => state.topRatedList)


      useEffect(() => {
      fetchTopRated()
      }, [fetchTopRated])
      
      return (
            <>

                  <TitleSection titleText="Mejor valorados" />
                  <h2 className=" py-2 font-inter font-bold text-xl "> Nuestros productos mejor valorados </h2>
                  <ProductSlider product={topRatedList} />
            </>
      )
}

export default RatedProducts