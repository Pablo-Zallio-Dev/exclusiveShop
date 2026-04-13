import FooterLists from "../ui/FooterLists"
import iconCopyright from '../../../assets/icons/icon-copyright.svg'

const Footer = () => {
      return (
            <>
                  <section className=" flex flex-col items-center py-3  bg-black text-white ">
                        <FooterLists />
                        <section className=" flex items-center gap-1 ">
                              <img src={iconCopyright} alt="" />
                              <p className=" text-footer ">Copyright Rimel 2022. All right reserved</p>
                        </section>
                  </section>
            </>
      )
}

export default Footer