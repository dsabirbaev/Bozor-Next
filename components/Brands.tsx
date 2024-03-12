
import Image from "next/image"
import "./style.css"
const Brands = () => {
  return (
    <section className='pt-5 pb-10'>
        <div className='container'>
            <div className="flex flex-col"> 
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-['TTInterfaceBold'] text-[20px]">Brendlar</h2>
                    <a href="/brands" title="Brendlar" className="text-[#9a999b] text-[20px] font-['TTInterfaceMedium']">
                        Hammasini ko'rsatish
                    </a>
                </div>

                <div className="rounded-[20px] p-4 bg-white">
                    <ul className="brand-list flex brend-list__first">
                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/samsung">
                                <Image  width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/samsungg.png" alt="samsung" />
                            </a>
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/premier">
                                <Image  width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/premierr.png" alt="premier" />
                            </a>  
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/nestle">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/vitekk.png" alt="nestle"/>
                            </a>  
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/vitek">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/nestle_UCmBmW7.png" alt="vitek" />
                            </a>  
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/nivea">
                                <Image  width={140} height={90} className="object-contain" src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/filer_public/f3/5f/f35f4239-dffb-4ecb-930e-8b0403f6c9c7/480px-nivea_logosvg.png" alt="nivea" />
                            </a>  
                        </li>
                    </ul>

                    <ul className="brand-list flex brend-list__second">
                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/garnier">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/garnier.png" alt="garnier" />
                            </a>
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/markiz">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/makiz_COumaso.png" alt="markiz" />
                            </a>  
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/crafers">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/crafers.png" alt="crafers" />
                            </a>  
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/progum">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/dd_4FsaWyL.png" alt="progum" />
                            </a>  
                        </li>

                        <li className="h-[144px] w-[225.8px] flex items-center justify-center">
                            <a href="/brands/futbolchi">
                                <Image width={140} height={90} src="https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/brands/yosh-fudbolchi.png" alt="yosh futbolchi" />
                            </a>  
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands