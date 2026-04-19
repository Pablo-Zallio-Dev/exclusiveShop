import { useEffect, useState } from 'react'
import { ProductStore } from '../../../store/Product.store'
import CardProducts from './card_products/CardProducts'
import ButtonViewAll from '../ui/ButtonViewAll'

const GridAllProducts = () => {

      const fetchProducts = ProductStore((state) => state.fetchProducts)
      const productList = ProductStore((state) => state.productsList)

      useEffect(() => {
        fetchProducts()
      }, [fetchProducts])

      const [viewAll, setViewAll] = useState(false)
      
      const viewAllFunction = () => {
            setViewAll(!viewAll)
      }

  return (
    <section className=" my-20  ">
            <section className={ ` grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 justify-items-center gap-12 ${ viewAll ? 'h-min' : 'h-105'} h-105 overflow-hidden ` }>
                  {
                        productList.map((products) => (
                              <CardProducts prod={products} />
                        ))
                  }
            </section>
            <ButtonViewAll text={ !viewAll ?'Ver mas': 'Ver menos'} action={viewAllFunction} />
    </section>
  )
}

export default GridAllProducts