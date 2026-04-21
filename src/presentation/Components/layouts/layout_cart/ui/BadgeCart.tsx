
const BadgeCart = ( {total}: {total: number} ) => {



  return (
    <section className={` absolute -top-2.5 -right-2.5 ${total > 0 ? 'flex': 'hidden'} justify-center items-center h-5 w-5 rounded-full text-xs bg-red `}>
      <p className="  text-white "> {total} </p>
    </section>
  )
}

export default BadgeCart