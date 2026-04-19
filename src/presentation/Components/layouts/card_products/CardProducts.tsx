//import { Eye, Heart } from 'lucide-react'
//import { Link } from 'react-router-dom'

import type { Product } from "../../../../domain/entities/Product.entities";
import BadgeDiscount from "./ui/BadgeDiscount";
import ButtonAdd from "./ui/ButtonAdd";
import IconButtons from "./ui/IconButtons";
import StartRating from "./ui/StartRating";

const CardProducts = ({ prod }: { prod: Product }) => {


      return (
            <section className=" ">
                  <section className=" flex flex-col justify-between gap-4 w-50 md:w-56 lg:w-50 ">
                        <div className=" relative overflow-hidden rounded-sm  bg-white group ">
                              <img
                                    src={prod.images[0]}
                                    alt={prod.title}
                                    className="w-full object-contain bg-secondary-gray md:group-hover:scale-110 transition-transform duration-150 "
                              />
                              <section className=" absolute top-0 p-2.5 flex justify-between items-start w-full ">
                              <BadgeDiscount discount={prod.discount} />
                              <IconButtons />
                              </section>
                              <ButtonAdd />
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

/* 


<section className=" border border-b-blue-600 ">
                              <section className=" border border-amber-600 ">
                                    <img src={prod.images[0]} alt="" className=" w-36 bg-secondary-gray " />
                                    <section className="">
                                          <BadgeDiscount />
                                    </section>
                                    <button></button>
                              <p className="">sdf</p>
                              </section>
                        </section>
                              


                                    <img src={prod.images[0]} alt="" className=" w-36 bg-secondary-gray " />


<section className="  ">
                  <section className=" flex flex-col justify-between relative h-56 w-36 md:w-67  ">
                        <img src={image} alt="" className='   ' />
                        <section className=" flex justify-between items-start  absolute top-0 left-0 right-0 p-3 ">
                              <p className=" py-1 px-3 rounded-lg bg-red text-xs text-white ">-40%</p>
                              <section className=" flex flex-col gap-2 ">
                                    <Heart size={26} className=' p-1 bg-white rounded-full ' />
                                    <Link to=''><Eye size={26} className=' p-1 bg-white rounded-full ' /></Link>
                              </section>
                        <section className=" absolute bottom-0 border ">
                              <p className="">Hola</p>
                        </section>
                        </section>
                        <section className=" flex flex-col gap-3  ">
                              <p className=" text-xs font-semibold "> {title} </p>
                              <p className=" text-red text-xs font-semibold ">$ {price} </p>
                        </section>
                  </section>
            </section>*/
