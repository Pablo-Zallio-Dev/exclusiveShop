import { ProductStore } from "../../../store/Product.store"
import CardProducts from "./card_products/CardProducts"



const ProductsByCategory = () => {
      const  productForCategoryList = ProductStore((state) => state.productForCategoryList)
     
        console.log(productForCategoryList)
           
  return (
    <>

    <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center gap-8 md:gap-16 py-12 ">
      {
            productForCategoryList.map((product) => (
                  <CardProducts prod={product} />

            ))
      }
    </section>


    
    </>
  )
}

export default ProductsByCategory