import { ProductStore } from "../../../store/Product.store"
import ButtonViewAll from "../ui/ButtonViewAll"
import CardProducts from "./card_products/CardProducts"



const ProductsByCategory = () => {
      const productForCategoryList = ProductStore((state) => state.productForCategoryList)
      const resetForCategoryList = ProductStore((state) => state.resetForCategoryList)

      return (
            <section className=" border-b border-secondary-gray mb-10 ">

                  {
                        productForCategoryList.length > 0
                              ? <section className={`  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center gap-8 md:gap-16 py-6 `}>
                                    {

                                          productForCategoryList.map((product) => (
                                                <CardProducts prod={product} />

                                          ))
                                    }


                              </section>
                              : <p className=" flex justify-center pb-8  text-3xl ">¡Selecciona tu categoria favorita!</p>
                  }

                  {
                        productForCategoryList.length > 0 ? <ButtonViewAll action={resetForCategoryList} text={"Ver Menos"} /> : <></>
                  }


            </section>



      )
}

export default ProductsByCategory;