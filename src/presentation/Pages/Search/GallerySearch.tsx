import { ProductStore } from "../../../store/Product.store"
import ProductResult from "./Layout/ProductResult"
import SearchEmpty from "./Layout/SearchEmpty"

const GallerySearch = () => {

      const productSearch = ProductStore((state) => state.productSearch)

      console.log(productSearch)
      return (
            <>

                  {
                        productSearch.length > 0
                              ? <ProductResult products={productSearch} />
                              : <SearchEmpty />
                  }


                 
            </>
      )
}

export default GallerySearch