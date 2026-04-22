import type { Product } from "../../../../domain/entities/Product.entities";
import BadgeDiscount from "./ui/BadgeDiscount";
import ButtonAdd from "./ui/ButtonAdd";
import IconButtons from "./ui/IconButtons";
import StartRating from "./ui/StartRating";

const CardProducts = ({ prod }: { prod: Product }) => {


      return (
            <section className=" ">
                  <section className=" flex flex-col justify-between gap-4 w-30 md:w-56 lg:w-50 ">
                        <div className=" relative overflow-hidden rounded-sm  bg-white group ">
                              <img
                                    src={prod.images[0]}
                                    alt={prod.title}
                                    className="w-full object-contain bg-secondary-gray md:group-hover:scale-110 transition-transform duration-150 "
                              />
                              <section className=" absolute top-0 p-2.5 flex justify-between items-start w-full ">
                                    <IconButtons prod={prod} />
                                    <BadgeDiscount discount={prod.discount} />
                              </section>
                              <ButtonAdd item={prod} />
                        </div>
                        <section className=" flex flex-col justify-end  gap-2 ">
                              <p className=" w-5/6 text-xs md:text-sm "> {prod.title} </p>
                              <p className=" text-xs md:text-sm text-red "> {prod.price} </p>
                              <section className=" items-end ">
                                    <StartRating rating={prod.rating} />
                              </section>
                        </section>
                  </section>
            </section>
      );
};

export default CardProducts;
