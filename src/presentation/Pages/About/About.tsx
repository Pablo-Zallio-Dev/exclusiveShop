import { Link } from "react-router-dom"
import imageAbout from '../../../assets/images/image-about.webp'
import CardsAbout from "./ui/CardsAbout"
import iconSallers from '../../../assets/icons/icon-sallers.svg'
import ProfileAbout from "./ui/ProfileAbout"
import imageAbout_01 from '../../../assets/images/image-personal_1.webp'
import imageAbout_02 from '../../../assets/images/image-personal_2.webp'
import imageAbout_03 from '../../../assets/images/image-personal_3.webp'
import ServiceSection from "../../Components/layouts/ServiceSection"

const About = () => {
      return (
            <>
            
            <section className="px-6 md:px-18 lg:px-32 pt-50 md:pt-60  ">
                  <div className=" py-15 text-sm md:block ">
                        <Link to='/'>Inicio / </Link>
                        <span className=" font-semibold "> Nosotros </span>
                  </div>

                  <section className=" flex flex-col sm:flex-row justify-between lg:justify-around items-center gap-8 pb-12 ">
                        <div className=" max-w-120 ">
                              <h2 className=" py-3 text-lg md:text-2xl font-semibold ">Nuestra historia</h2>
                              <div className=" text-xxs md:text-sm xl:text-lg ">
                                    <p className="  ">Lanzada en 2015, Exclusive es la principal plataforma de comercio electrónico del sur de Asia, con una presencia activa en Bangladés. Gracias a una amplia gama de soluciones personalizadas de marketing, datos y servicios, Exclusive cuenta con 10 500 vendedores y 300 marcas, y atiende a 3 millones de clientes en toda la región. </p>
                                    <br />
                                    <p className="">Exclusive cuenta con más de un millón de productos en su catálogo y está creciendo a un ritmo vertiginoso. Exclusive ofrece una amplia variedad de productos en categorías que abarcan desde...</p>
                              </div>
                        </div>
                        <div className=" max-w-150 ">
                              <img src={imageAbout} alt="" className=" md:grayscale-40 md:hover:grayscale-10 transition-all duration-400 " />
                        </div>
                  </section>
            </section>
            <section className=" flex flex-wrap justify-around lg:justify-center items-center gap-8 md:gap-16 px-10 py-18 ">
                  <CardsAbout icon={iconSallers} text='Vendedores activos en nuestra página web' number='10.5' />
                  <CardsAbout icon={iconSallers} text='Oferta mensual de productos' number='33' />
                  <CardsAbout icon={iconSallers} text='Ventas anual en nuestra página web' number='25' />
            </section>
            <section className=" flex flex-wrap justify-center gap-8 lg:gap-24 px-8 py-15 ">
                  <ProfileAbout image={imageAbout_01} name={'Ana Morlan'} position={'Managing Director'} />
                  <ProfileAbout image={imageAbout_02} name={'Miguel Delgado'} position={'Founder & Chairman'} />
                  <ProfileAbout image={imageAbout_03} name={'Pedro Casado'} position={'Product Designer'} />
            </section>
            <ServiceSection />
            </>
      )
}

export default About