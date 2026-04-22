import imageBanner from '../../../../assets/images/image-banner.png'

const BannerProducts = () => {






      return (
            <section className=" flex justify-center mb-12 ">
                  <section className=" flex flex-col items-center sm:flex-row justify-around gap-10 w-full max-w-7xl p-8 rounded-xl bg-linear-to-r from-slate-700 to-slate-900">
                        <section className=" flex flex-col justify-center gap-4 md:gap-8 max-w-70 lg:max-w-100 ">
                              <h2 className=" font-poppins text-sm font-semibold text-green-text-banner  ">Categories</h2>
                              <p className=" text-xl sm:text-2xl lg:text-3xl text-white ">Mejora tu experiencia con la ultima tecnologia</p>
                              <button className=" w-max px-4 py-2 bg-green-banner text-xs font-semibold  ">¡Compra ya!</button>
                        </section>
                        <section className="">
                              <img src={imageBanner} alt="imagen de banner" className=' lg:w-50 ' />
                        </section>

                  </section>
            </section>
      )
}

export default BannerProducts