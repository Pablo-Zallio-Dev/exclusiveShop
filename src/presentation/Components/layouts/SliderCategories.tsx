import { useEffect } from "react"
import { ProductStore } from "../../../store/Product.store"
import CategoriesSlider from "../ui/CategoriesSlider"
import TitleSection from "../ui/TitleSection"




const SliderCategories = () => {
      const fetchCategories = ProductStore((state) => state.fetchCategories)
      const categoriesList = ProductStore((state) => state.categoriesList)
      
      useEffect(() => {
        fetchCategories()
      }, [fetchCategories])
      
      
      return (
            <section className="">
                  <TitleSection titleText="Categorias" />
                  <h2 className=" py-2 font-inter font-bold text-xl "> Selecciona nuesta categoria </h2>
                  <CategoriesSlider categories={categoriesList} />
            </section>
      )
}

export default SliderCategories