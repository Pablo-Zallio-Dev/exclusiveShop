import { ArrowRight } from "lucide-react"

const ButtonSlideRight = ({arrowAction}: {arrowAction: () => void }) => {
      return (
            <button
                  className="p-3 rounded-full bg-secondary-gray"
                  onClick={arrowAction}
            >
                  <ArrowRight size={16} />
            </button>
      )
}

export default ButtonSlideRight