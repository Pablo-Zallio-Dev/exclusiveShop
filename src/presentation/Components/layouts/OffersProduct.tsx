import { useEffect } from "react";
import { ProductStore } from "../../../store/Product.store";
import { ProductSlider } from "../ui/ProductSlider"
import TitleSection from "../ui/TitleSection"



const OffersProduct = () => {

      const fetchProductOffers = ProductStore((state) => state.fetchOffersProducts);
      const productOffers = ProductStore((state) => state.offersProductsList);

      useEffect(() => {
            fetchProductOffers();
      }, [fetchProductOffers]);

      return (
            <section className=" py-10 ">
                  <TitleSection titleText="Ofertas" />
                  <h2 className=" py-2 font-inter font-bold text-xl "> Ofertas del dia </h2>
                  <ProductSlider product={productOffers} />
            </section>
      )
}

export default OffersProduct