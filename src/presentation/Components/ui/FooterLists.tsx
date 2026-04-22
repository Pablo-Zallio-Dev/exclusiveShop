
import imageCodeQr from '../../../assets/images/image-codigoQr.png'
import imageGooglePlay from '../../../assets/images/image-googlePlay.png'
import imageAppStore from '../../../assets/images/image-appStore.png'

import iconFacebook from '../../../assets/icons/icon-facebook.svg'
import iconTwitter from '../../../assets/icons/icon-twitter.svg'
import iconInstagram from '../../../assets/icons/icon-instagram.svg'
import iconLinkedin from '../../../assets/icons/Icon-linkedin.svg'

const FooterLists = () => {
      return (
            <>
                  <section className=" flex flex-wrap  justify-start  md:justify-center gap-6 p-4 sm:p-8 pb-16  text-white ">
                        <section className="  w-51  ">
                              <h2 className=" font-inter font-bold text-sm pb-6 ">Exclusive</h2>
                              <h3 className=" subtitle__footer ">Subscribete</h3>
                              <p className=" text__footer ">Consigue un 10 % de descuento en tu primer pedido</p>
                        </section>
                        <section className=" w-51 ">
                              <h3 className=" subtitle__footer ">Soporte</h3>
                              <p className=" text__footer ">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                              <p className=" text__footer ">exclusive@gmail.com</p>
                              <p className=" text__footer ">+88015-88888-9999</p>
                        </section>
                        <section className=" w-51 ">
                              <h3 className=" subtitle__footer ">Cuenta</h3>
                              <p className=" text__footer ">Mi cuenta</p>
                              <p className=" text__footer ">Login / Register</p>
                              <p className=" text__footer ">Cart</p>
                        </section>
                        <section className=" w-51 ">
                              <h3 className=" subtitle__footer ">Enlaces de Interes</h3>
                              <p className=" text__footer ">Politica de Privacidad</p>
                              <p className=" text__footer ">Terminos de uso</p>
                              <p className=" text__footer ">FAQ</p>
                              <p className=" text__footer ">Contacto</p>
                        </section>
                        <section className=" w-51 ">
                              <h3 className=" subtitle__footer ">Download APP</h3>
                              <section className=" flex gap-2 ">
                                    <img src={imageCodeQr} alt="" />
                                    <section className=" flex flex-col gap-2 ">
                                          <img src={imageGooglePlay} alt="icono de google play" />
                                          <img src={imageAppStore} alt="icono de app store apple" />
                                    </section>
                              </section>
                              <section className=" flex gap-5 pt-5      ">
                                    <img src={iconFacebook} alt="icono de facebook " />
                                    <img src={iconTwitter} alt="icono de twitter " />
                                    <img src={iconInstagram} alt="icono de instagram " />
                                    <img src={iconLinkedin} alt="icono de Linkedin " />
                              </section>
                        </section>
                  </section>
            </>
      )
}

export default FooterLists