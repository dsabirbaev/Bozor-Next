"use client"

import { FC } from "react";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
//// store
import { useModalStoreDetail } from "@/stores/modalStore";

//// types
import { ICardProps } from "@/types";

//// modal window
import DetailModal from "../Modals/DetailModal";

//// react icons
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

//// css
import "./style.css"


const ProductCard: FC<ICardProps> = ({ data:{image, name, price, category, $id} }) => {


  const { toggleModal } = useModalStoreDetail();
  const[active, setActive] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className='card w-[182px] bg-white h-[366px] overflow-hidden  rounded-[20px]  relative cursor-grab'>
       <Link href={`/product/${$id}`}>
            <div className="h-[225px] relative">
                <Image  src={image[0]}  fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit:"cover"}} alt="data"  />
            </div>
       </Link>
       

        <span onClick={() => setActive(!active)} className="absolute top-4 right-4 w-[30px] h-[30px] bg-[#F5F5F7] rounded-full flex items-center justify-center"> 
        {
            active ? <FaHeart className="text-red-400"/> : <FaRegHeart /> 
        }
        
        
        </span>
        <button onClick={() => setIsModalOpen(true)}className="btn-card absolute top-[90px] right-5 bg-[#F5F5F7] backdrop-blur-[2px] block border-none outline-none text-[12px] font-['TTInterfaceMedium'] border-[8px] w-[80%] py-[12px] text-[#020105]">
            Tezkor korish
        </button>
        <DetailModal id={$id} isOpen={isModalOpen} toggleModal={() => setIsModalOpen(false)} />
      
        
        <Link href={`/product/${$id}`}>
            <div className="p-[10px] flex flex-col justify-between h-[140px]">
                <div className="mb-2">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[14px] text-[#2B4FAB] font-['TTInterfaceSemiBold']">{price}</span>
                        <span className="pi pi-plus-circle"></span>
                        <CiCirclePlus  className="text-[25px] text-[#2B4FAB]"/>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                        <span>Kategoriya: </span>  <span className="text-[10px]">{category}</span>
                    </div>
                
                </div>
                <p className="text-[#020105] text-[12px]">{name}</p>
            </div>
        </Link>
        
    </div>
  )
}

export default ProductCard