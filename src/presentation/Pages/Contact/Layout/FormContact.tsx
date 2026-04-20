import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "../../../../schemas/formSchema"
import type { Inputs } from "../types/inputsTypes"
import emailjs from '@emailjs/browser';
import { useState } from "react";
const FormContact = () => {

      const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
            resolver: zodResolver(formSchema)
      })

      const [send, setSend] = useState(false)
      const [isSending, setIsSending] = useState(false);

      const onSubmit = (data: Inputs) => {
            setIsSending(true);
            // 💡 Configura tus IDs de EmailJS aquí
            const serviceID = 'service_63rc3z4';
            const templateID = 'template_dj85y0c';
            const publicKey = 'jYxOI9odbFO0rtdnc';

            const templateParams = {
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  textarea: data.textarea,
            };

            // Enviamos el objeto 'data' directamente como parámetros del template
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                  .then((response) => {
                        if (response.status) {
                              console.log('¡Correo enviado con éxito!', response.status, response.text);
                              reset(); // Limpia el formulario
                              setSend(true)
                              setTimeout(() => {
                                    setSend(false)
                              }, 2000);
                        }
                  })
                  .catch((err) => {
                        console.error('Error al enviar:', err);
                        alert('Hubo un fallo al enviar el mensaje');
                  })
                  .finally(() => {
                        setIsSending(false); // Liberamos el estado de carga
                  });
      };



      return (
            <section className=" md:col-span-2 py-9 px-7 shadow-md/10 border border-secondary-gray    ">
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-10 ">

                        <section className=" flex flex-col lg:flex-row lg:justify-between gap-10 ">
                              <div className="  ">
                                    <label htmlFor="name"></label>
                                    <input className=" w-full p-2 rounded-md bg-secondary-gray focus:outline-none text-xs " type="text" id="name" {
                                          ...register('name')

                                    }
                                          placeholder="Nombre" />
                                    {
                                          errors.name?.message && <p className=" text-xxs text-red "> {errors.name.message} </p>
                                    }
                              </div>
                              <div className="  ">
                                    <label htmlFor="email"></label>
                                    <input className=" w-full p-2 rounded-md bg-secondary-gray focus:outline-none text-xs " type="email" id="email" {
                                          ...register('email')} placeholder="Email" />
                                    {
                                          errors.email?.message && <p className=" text-xxs text-red "> {errors.email.message} </p>
                                    }
                              </div>
                              <div className="  ">
                                    <label htmlFor="phone"></label>
                                    <input className=" w-full p-2 rounded-md bg-secondary-gray focus:outline-none text-xs " type="phone" id="phone" {
                                          ...register('phone')} placeholder="Telefono" />
                                    {
                                          errors.phone?.message && <p className=" text-xxs text-red "> {errors.phone.message} </p>
                                    }
                              </div>
                        </section>
                        <section className=" flex flex-col gap-1 ">
                              <textarea rows={8} id="" className=" p-2  bg-secondary-gray text-xs resize-none focus:outline-none  " {
                                    ...register('textarea')
                              } placeholder="Tu mensaje" />
                              {
                                    errors.textarea?.message && <p className=" text-xxs text-red "> {errors.textarea.message} </p>
                              }
                              <span className=" mt-1 text-xxs ">El mensaje debe contener al menos 100 caracteres</span>
                        </section>
                        <input type="submit" value={isSending ? "Enviando..." : "Enviar formulario"} disabled={isSending} className=" md:self-end md:w-min px-8 py-4 bg-red text-white text-sm" />
                  </form>
                  <section className=" flex justify-center py-8 text-xs ">
                        {
                              send && <p className="">¡Mensaje enviado correctamente 👍!</p>
                        }

                  </section>
            </section>
      )
}

export default FormContact