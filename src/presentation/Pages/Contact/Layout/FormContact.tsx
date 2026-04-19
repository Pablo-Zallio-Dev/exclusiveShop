import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import  { formSchema } from "../../../../schemas/formSchema"
import type { Inputs } from "../types/inputsTypes"

const FormContact = () => {

      const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
            resolver: zodResolver(formSchema)
      })

      const onSubmit = (data: object) => {
            console.log(data)
            reset()
      }



      return (
            <section className=" md:col-span-2 py-9 px-7 shadow-md/10     ">
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-10 ">

                        <section className=" flex flex-col lg:flex-row lg:justify-between gap-10 ">
                              <div className="  ">
                                    <label htmlFor="name"></label>
                                    <input className=" w-full p-2 rounded-md bg-secondary-gray focus:outline-none text-sm " type="text" id="name" {
                                          ...register('name')
                                    } />
                                    {
                                          errors.name?.message && <p className=" text-xxs text-red "> {errors.name.message} </p>
                                    }
                              </div>
                              <div className="  ">
                                    <label htmlFor="email"></label>
                                    <input className=" w-full p-2 rounded-md bg-secondary-gray focus:outline-none text-sm " type="email" id="email" {
                                          ...register('email')
                                    } />
                                    {
                                          errors.email?.message && <p className=" text-xxs text-red "> {errors.email.message} </p>
                                    }
                              </div>
                              <div className="  ">
                                    <label htmlFor="phone"></label>
                                    <input className=" w-full p-2 rounded-md bg-secondary-gray focus:outline-none text-sm " type="phone" id="phone" {
                                          ...register('phone')
                                    } />
                                    {
                                          errors.phone?.message && <p className=" text-xxs text-red "> {errors.phone.message} </p>
                                    }
                              </div>
                        </section>
                        <section className=" flex flex-col gap-1 ">
                              <textarea rows={8} id="" className=" resize-none p-2  bg-secondary-gray " {
                                    ...register('textarea')
                              } />
                              {
                                          errors.textarea?.message && <p className=" text-xxs text-red "> {errors.textarea.message} </p>
                                    }
                              <span className=" text-xxs ">El mensaje debe contener al menos 100 caracteres</span>
                        </section>
                        <input type="submit" value="Enviar formulario" className=" md:self-end md:w-min px-8 py-4 bg-red text-white text-sm" />
                  </form>
            </section>
      )
}

export default FormContact