
interface CardsProps {
      icon: string,
      text: string,
      number: string
}

const CardsAbout = ({ icon, text, number }: CardsProps) => {
      return (
            <section className=" flex flex-col items-center gap-6 py-6 px-10 border max-w-56 shadow-lg/50 md:hover:shadow-xl/20 md:hover:-translate-y-2 transition-all duration-300  ">
                  <img src={icon} alt="iconos" className=" w-15  " />
                  <div className=" flex flex-col items-center text-center ">
                        <p className=" text-xl font-semibold pb-2"> {number}k </p>
                        <p className=" text-xs "> {text} </p>
                  </div>
            </section>
      )
}

export default CardsAbout