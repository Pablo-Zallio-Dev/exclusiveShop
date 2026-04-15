
const BadgeDiscount = ({ discount }: { discount: number }) => {



      const percentageRounded = Math.round(discount)
      return (
            <section className={` ${percentageRounded > 1 ? '' : 'hidden'} py-1 px-3 bg-red text-xs md:text-sm text-white rounded-lg `}>
                  <p className='' > -{percentageRounded}% </p>
            </section>
      )
}

export default BadgeDiscount
