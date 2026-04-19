import TitleSection from "../ui/TitleSection"
import GridAllProducts from "./GridAllProducts"

const AllProducts = () => {
  return (
    <section className="">
      <TitleSection titleText="Todos los productos" />
      <h2 className=" py-2 font-inter font-bold text-xl "> Todos los productos a tu alcance </h2>

      <GridAllProducts />
    </section>
  )
}

export default AllProducts