import iconPhone from '../../../../assets/icons/icon-phone.png'
import iconMail from '../../../../assets/icons/icon-mail.png'

const Infocontact = () => {
      return (
            <section className=" py-9 px-7 xl:px-18 shadow-md/10     ">
                  <section className=" flex flex-col gap-6 border-b border-secondary-gray ">
                        <div className=" flex items-center gap-4 ">
                              <img src={iconPhone} alt="" />
                              <h2 className=" text-sm ">Llamanos</h2>
                        </div>
                        <div className="">
                        <p className=" mb-4 text-xs "> Estamos disponibles las 24/7. </p>
                        <p className=" mb-8 text-xs "> Telefono: +34 123 45 67 89 </p>
                        </div>
                  </section>
                   <section className=" flex flex-col gap-6 pt-8 ">
                        <div className=" flex items-center gap-4 ">
                              <img src={iconMail} alt="" />
                              <h2 className=" text-sm ">Escribenos</h2>
                        </div>
                        <div className="">
                        <p className=" mb-4 text-xs "> Rellena nuestro formulario y nos pondremos en contacto contigo en un plazo de 24 horas. </p>
                        <p className=" mb-8 text-xs "> Emails: customer@exclusive.com </p>
                        <p className=" mb-8 text-xs "> Emails: support@exclusive.com </p>
                        </div>
                  </section>
            </section>
      )
}

export default Infocontact