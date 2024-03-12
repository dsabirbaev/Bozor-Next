
import { FC } from "react";
import Image from "next/image"

import { ICatalogCard } from "@/types";


const CatalogCard: FC<ICatalogCard> = ({ title, name1, name2, name3, name4, img1, img2, img3, img4 }) =>{
   
  return (
    <div className='rounded-[16px] bg-white min-w-[377px] px-5 py-[18px]'>
        <h2 className="text-[18px] font-['TTInterfaceSemiBold'] mb-5">{ title }</h2>
        <div className="mb-5">

            <div className="flex justify-between mb-3">
                <a href="/catalog/yo-masulotlari"  title={name1}>
                    <Image className="rounded-[16px] bg-image" width={160} height={128} src={img1} alt={name1} /> 
                    <h3 className="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{ name1 }</h3>
                </a>
                <a href="/catalog/ketchuplarsouslar-mayonez" title={name2}>
                    <Image className="rounded-[16px] object-contain bg-image" width={160} height={128} src={img2} alt={name2} /> 
                    <h3 className="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{ name2 }</h3>
                </a>
            </div>

            <div className="flex justify-between mb-3"> 
                <a href="/catalog/suvichimliklar"  title={name3}>
                    <Image className="rounded-[16px]  object-contain bg-image" width={160} height={128} src={img3} alt={name3} /> 
                    <h3 className="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{ name3 }</h3>
                </a>
                <a href="/catalog/makaron"  title={name4}>
                    <img className="rounded-[16px] object-contain bg-image" width={160} height={128} src={img4} alt={name4}/> 
                    <h3 className="text-[12px]  text-[#020105] font-['TTInterfaceLight'] mt-2">{ name4 }</h3>
                </a>
            </div>
        </div>

        <a href="/catalog?show=ozi-ovat-masulotlari" className="text-[#2b4fab] underline text-[14px] font-['TTInterfaceMedium']" title="OZIQ OVQAT MAXSULOTLARI">
            Ko'proq
        </a>
    </div>
  )
}

export default CatalogCard