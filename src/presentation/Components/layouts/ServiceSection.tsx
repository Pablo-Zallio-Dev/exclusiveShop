import iconCustome from '../../../assets/icons/icon-service_custome.png'
import iconDelivery from '../../../assets/icons/icon-service_delivery.png'
import iconSecure from '../../../assets/icons/icon-service_secure.png'

const ServiceSection = () => {
  return (
    <section className=" flex flex-wrap justify-center lg:justify-around gap-14      py-18 ">
      <div className="  flex flex-col gap-6 text-center items-center ">
            <img src={iconDelivery} alt="icono de envio" className='w-16' />
            <section>
            <h2 className=' font-poppins font-semibold ' >ENVÍO GRATUITO Y RÁPIDO</h2>
            <h3 className=" mt-2 text-xs ">Envío gratuito para todos los pedidos superiores a 140 $</h3>
            </section>
      </div>
      <div className="  flex flex-col gap-6 text-center items-center ">
            <img src={iconCustome} alt="icono de atencion al cliente" className='w-16' />
            <section>
            <h2 className=' font-poppins font-semibold ' >24/7 ATENCIÓN AL CLIENTE  </h2>
            <h3 className=" mt-2 text-xs ">Atención al cliente amable las 24/7 </h3>
            </section>
      </div>
       <div className="  flex flex-col gap-6 text-center items-center ">
            <img src={iconSecure} alt="icono de garantia" className='w-16' />
            <section>
            <h2 className=' font-poppins font-semibold ' >GARANTÍA DE DEVOLUCIÓN DEL DINERO </h2>
            <h3 className=" mt-2 text-xs ">Reembolsamos el dinero en un plazo de 30 días</h3>
            </section>
      </div>
    </section>
  )
}

export default ServiceSection