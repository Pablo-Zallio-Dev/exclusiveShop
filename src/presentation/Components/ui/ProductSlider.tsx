import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CardProducts from "../layouts/card_products/CardProducts";
import type { Product } from "../../../domain/entities/Product.entities";
import ButtonSlideLeft from "./ButtonSlideLeft";
import ButtonSlideRight from "./ButtonSlideRight";

export const ProductSlider = ({ product }: { product: Product[] }) => {
      // 1. Obtenemos 'emblaApi' para poder controlar las flechas
      const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);

      // 2. Funciones para los botones
      const scrollPrev = useCallback(() => {
            if (emblaApi) emblaApi.scrollPrev();
      }, [emblaApi]);

      const scrollNext = useCallback(() => {
            if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

      return (
            <div className="relative flex flex-col items-center gap-6 py-4 w-full">
                  <div className="overflow-hidden w-full" ref={emblaRef}>
                        {/* Este es el contenedor crítico */}
                        <div className="flex gap-4 md:gap-12 ">
                              {product.map((item) => (
                                    <CardProducts key={item.id} prod={item} />
                              ))}
                        </div>
                  </div>

                  <section className="flex gap-5">
                        <ButtonSlideLeft arrowAction={scrollPrev} />
                        <ButtonSlideRight arrowAction={scrollNext} />
                  </section>
            </div>
      )

};

/* 

<div className=" border-2  group max-w-8xl mx-auto ">
                  
                  <div className=" flex flex-col items-center over rounded-xl " ref={emblaRef}>
                        <div className="flex gap-8 ">
                              {product &&
                                    product.map((prod) => (
                                          <CardProducts
                                                title={prod.title}
                                                image={prod.images[0]}
                                                price={prod.price}
                                          />
                                    ))}
                        </div>
                        <section className="  ">
                              <ButtonSlideLeft arrowAction={scrollPrev} />
                              <ButtonSlideRight arrowAction={scrollNext} />
                        </section>
                  </div>
            </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>
      
      */
