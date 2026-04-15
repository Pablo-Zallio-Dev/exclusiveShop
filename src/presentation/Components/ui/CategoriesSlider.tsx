import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import ButtonSlideLeft from "./ButtonSlideLeft";
import ButtonSlideRight from "./ButtonSlideRight";
import IconCategory from "../layouts/slider_categories/IconCategory";

const CategoriesSlider = ({ categories }: { categories: string[] }) => {
      const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);
   
         // 2. Funciones para los botones
         const scrollPrev = useCallback(() => {
               if (emblaApi) emblaApi.scrollPrev();
         }, [emblaApi]);
   
         const scrollNext = useCallback(() => {
               if (emblaApi) emblaApi.scrollNext();
         }, [emblaApi]);
    

      return (
            <div className="relative flex flex-col items-center gap-6 py-4 w-full ">
                  <div className="overflow-hidden w-full" ref={emblaRef}>
                        {/* Este es el contenedor crítico */}
                        <div className=" flex gap-4 md:gap-12 py-4 px-4  ">
                              {categories.map((item) => (
                                    <IconCategory category={item} />
                              ))}
                        </div>
                              
                  </div>

                  <section className="flex gap-5">
                        <ButtonSlideLeft arrowAction={scrollPrev} />
                        <ButtonSlideRight arrowAction={scrollNext} />
                  </section>
            </div>
      )
  
}

export default CategoriesSlider