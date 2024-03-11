
import Image from "next/image"

import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-[48px] pb-3 bg-white">
      <div className="container">

          <div className="flex flex-col gap-y-10">
              <a className="text-center" href="/">
                    <Image src="https://bozor.com/_nuxt/img/logo.a6ecee7.webp" width={118} height={47} className="object-contain" alt="Bozor.com logo" />
              </a>

              <p className="text-center text-[14px] text-[#2B4FAB] font-['TTInterfaceMedium'] mb-5">Biz bilan xarid qilish yanada oson va tezroq!</p>

              <div className="flex  justify-between border-solid border-0 border-b-2 border-gray-100 pb-[40px]">
                  <div>
                      <p className="text-[#5d5d5f] text-[12px] mb-[10px]">Menyu:</p> 
                      <div className="flex flex-col gap-y-[10px] text-[14px]">
                            <a href="/"  title="Bosh sahifa">         
                              Bosh sahifa
                            </a> 
                            <a href="/news" title="Yangiliklar">
                              Yangiliklar
                            </a> 
                            <a title="Buyurtma holati">
                              Buyurtma holati
                            </a>
                      </div>
                  </div> 

                  <div>
                      <p className="text-[#5d5d5f] text-[12px] mb-[10px]">Aloqa:</p> 
                      <div className="flex flex-col gap-y-[10px] text-[14px]">
                          <a title="+998 95 515 65 15" href="tel:+998 95 515 65 15">
                              +998 95 515 65 15
                          </a> 
                          <a title="+998 95 195 55 75" href="tel:+998 95 195 55 75">+
                              998 95 195 55 75
                          </a>
                      </div>
                  </div> 

                  <div>
                      <p className="text-[#5d5d5f] text-[12px] mb-[10px]">Email:</p> 
                      <div className="text-[14px]">
                          <a title="info@bozor.com" href="mailto:info@bozor.com">info@bozor.com</a>
                      </div>
                  </div> 

                  <div>
                      <p className="text-[#5d5d5f] text-[12px] mb-[10px]">Manzil:</p> 
                      <div className="text-[14px]">
                          <p>Toshkent sh., Yashnobod tumani, Mumtoz. 5</p>
                      </div>
                  </div> 
                  


                  <div className="mobile-links">
                        <p className="text-[#5d5d5f] text-[12px]">Ilovani yuklab oling:</p> 
                        <div className="flex flex-col gap-y-[10px] text-[14px]">
                            <a title="Bozor.com Mobile Android App" href="https://play.google.com/store/apps/details?id=com.bozor.mobile&amp;hl=ru&amp;gl=US" target="_blank" rel="noopener noreferrer" className="mr-3">
                                <Image src="https://bozor.com/_nuxt/img/google-play.3f8de72.svg" width="141" height="30" alt="Google play" />
                            </a> 
                            <a title="Bozor.com Mobile IOS App" href="https://apps.apple.com/app/bozor-com-internet-dokoni/id1632430329" target="_blank" rel="noopener noreferrer">
                                <Image src="https://bozor.com/_nuxt/img/app-store.2b43376.svg" width="122" height="30" alt="App store" />
                            </a>
                        </div>
                  </div>



              </div>


              <div className="flex items-center justify-between">
                    <p className="text-[12px]"> © 2024 bozor.com Barcha huquqlar himoyalangan</p>
                    <a className="flex items-center justify-center rounded-md w-[42px] h-[42px] bg-[#F5F7FA]" href="https://t.me/bozor_com" target="_blank" title="Bozor.com telegram">
                      <FaTelegramPlane className="text-blue-800 text-[18px]" />   
                    </a>
                </div>
          </div>

      </div>
    </footer>
  )
}

export default Footer