import { ProductStore } from "../../../../store/Product.store"



const IconCategory = ({ category }: { category: string }) => {
      
      const fetchProductForCategory = ProductStore((state) => state.fetchProductForCategory)

  

      return (
            <section className=" flex justify-center items-center shadow-sm/10 border border-secondary-gray mx-4 md:hover:-translate-y-2 md:hover:scale-110 md:hover:shadow-sm/20 duration-150 " onClick={() => {fetchProductForCategory(category)}} >
                  <button className=" py-1 md:py-4 px-4 md:px-6 text-xxs md:text-xs text-center uppercase  " > {category} </button>
            </section>
      )
}

export default IconCategory