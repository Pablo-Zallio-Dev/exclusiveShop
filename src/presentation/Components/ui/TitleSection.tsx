import iconRectangle from '../../../assets/icons/icon-rectangleTitle.svg'

const TitleSection = ({titleText}: {titleText: string})  => {
  return (
    <>
      <section className=" flex items-center gap-4 ">
            <img src={iconRectangle } alt="" />
            <h2 className=" text-red text-xs font-semibold "> {titleText} </h2>
      </section>
    </>
  )
}

export default TitleSection