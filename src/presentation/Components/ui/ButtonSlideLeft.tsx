import { ArrowLeft } from "lucide-react"



const ButtonSlideLeft = ({arrowAction}: {arrowAction: () => void }) => {
      return (
            <button
                  className=" p-3 rounded-full bg-secondary-gray "
                  onClick={arrowAction}
            >
                  <ArrowLeft size={16} />
            </button>
      )
}

export default ButtonSlideLeft