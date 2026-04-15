
const IconCategory = ({ category }: { category: string }) => {
      return (
            <section className=" flex-[0_0_10%] md:flex-[0_0_12%] flex justify-center items-center shadow-lg/10 border border-secondary-gray md:hover:-translate-y-2 md:hover:scale-110 md:hover:shadow-lg/20 duration-150     ">
                  <button className=" py-1 md:py-4 px-4 md:px-6 text-xxs md:text-xs text-center uppercase  " > {category} </button>
            </section>
      )
}

export default IconCategory