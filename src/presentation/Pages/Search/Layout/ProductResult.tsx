import type { Product } from '../../../../domain/entities/Product.entities'
import CardProducts from '../../../Components/layouts/card_products/CardProducts'
import TitleSection from '../../../Components/ui/TitleSection'

const ProductResult = ({ products }: { products: Product[] }) => {



      return (
            <section className="">
                  <section className="px-6 md:px-18 lg:px-32 py-12">
                        <TitleSection titleText={` ${products.length} ${products.length > 1 ? 'Resultados' : 'Resultado'} `} />
                        <section className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center  py-18 ">

                              {
                                    products.map((item) => (

                                          <CardProducts prod={item} />
                                    ))
                              }
                        </section>
                  </section>
            </section>
      )
}

export default ProductResult