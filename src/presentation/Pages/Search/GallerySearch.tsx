import { ProductStore } from "../../../store/Product.store"
import ProductResult from "./Layout/ProductResult"
import SearchEmpty from "./Layout/SearchEmpty"

const GallerySearch = () => {

      const productSearch = ProductStore((state) => state.productSearch)

      console.log(productSearch)
      return (
            <>
                  <section className=" pt-40 md:pt-60 ">
                  {
                        productSearch.length > 0
                              ? <ProductResult products={productSearch} />
                              : <SearchEmpty />
                  }

                  </section>


                 
            </>
      )
}

export default GallerySearch