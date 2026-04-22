
interface ProfileAboutProps {
      image: string,
      name: string,
      position: string
}

const ProfileAbout = ({ image, name, position }: ProfileAboutProps) => {
      return (
            <section className=" flex flex-col gap-12 ">
                  <img src={image} alt="imagen de trabajadores" className=' md:hover:scale-110 transition-transform duration-400 ' />
                  <div className="">
                        <p className=" text-lg font-semibold "> {name} </p>
                        <p className=" text-xs "> {position} </p>
                  </div>
            </section>
      )
}

export default ProfileAbout