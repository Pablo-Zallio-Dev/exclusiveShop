import { Link } from "react-router-dom"
import Infocontact from "./Layout/InfoContact"
import FormContact from "./Layout/FormContact"

const Contact = () => {



      return (
            <section className="px-6 md:px-18 lg:px-32 ">
                  <div className=" py-20 text-sm hidden md:block ">
                        
                        <Link to='/'>Inicio / </Link>
                        <span className=" font-semibold "> Contacto</span>
                  </div>

                  <section className=" grid grid-cols-1 md:grid-cols-3 gap-8 pb-24 ">
                        <Infocontact />
                        <FormContact />
                  </section>
            </section>

      )
}

export default Contact