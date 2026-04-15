import { Eye, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const IconButtons = () => {
      return (
            <section className=" flex flex-col gap-2   ">
                  <section className=" p-1.5 bg-white rounded-full ">
                        <Heart  className=" w-3.5 md:w-4.5 h-3.5 md:h-4.5 " />
                  </section>

                  <Link to="/descproduct" className=" p-1.5 bg-white rounded-full ">
                        <Eye className=" w-3.5 md:w-4.5 h-3.5 md:h-4.5 " />
                  </Link>
                 
            </section>
      )
}

export default IconButtons