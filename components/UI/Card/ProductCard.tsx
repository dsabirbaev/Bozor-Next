"use client"

import { FC } from "react";
import { useState } from "react";
import Image from "next/image"

//// types
import { ICardProps } from "@/types";

//// react icons
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

import "./style.css"


const ProductCard: FC<ICardProps> = ({ data:{image, name, price, category} }) => {
  
  const[active, setActive] = useState<boolean>(false)

  return (
    <div className='card bg-white w-[182px] h-[366px] rounded-[20px] overflow-hidden relative cursor-grab'>
        <div className="h-[225px] relative">
            <Image  src={image}  fill  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" style={{objectFit:"cover"}} alt="data"  />
        </div>

        <span onClick={() => setActive(!active)} className="absolute top-4 right-4 w-[30px] h-[30px] bg-[#F5F5F7] rounded-full flex items-center justify-center"> 
        {
            active ? <FaHeart className="text-red-400"/> : <FaRegHeart /> 
        }
        
        
        </span>
        <button className="btn-card absolute top-[90px] right-5 bg-[#F5F5F7] backdrop-blur-[2px] block border-none outline-none text-[12px] font-['TTInterfaceMedium'] border-[8px] w-[80%] py-[12px] text-[#020105]">
            Tezkor korish
        </button>

        <div className="p-[10px] flex flex-col justify-between">
            <div className="mb-2">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[14px] text-[#2B4FAB] font-['TTInterfaceSemiBold']">{price}</span>
                    <span className="pi pi-plus-circle"></span>
                    <CiCirclePlus  className="text-[25px] text-[#2B4FAB]"/>
                </div>
                <div className="flex items-center justify-between text-[13px] mb-2">
                    <span>Kategoriya: </span>  <span>{category}</span>
                </div>
                <p className="text-[#020105] text-[12px] h-[55px]">{name}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProductCard