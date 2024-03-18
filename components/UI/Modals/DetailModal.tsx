
"use client";


import { FC } from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";


//// hooks
import useGetProductById from "@/hooks/useGetProductById";

//// store
import {useModalStoreDetail} from '@/stores/modalStore';


//// UI prime
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

//// types
import { IProducts } from "@/types";

//// react icons
import { TbLoader3 } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

interface ICardID {
  id: string
}

const DetailModal: FC<ICardID & { isOpen: boolean; toggleModal: () => void }> = ({ id, isOpen, toggleModal }) => {
 
  // console.log(id)
  const [product, setProduct] = useState<IProducts>(); 
  const [loading, setLoading] = useState<boolean>(false); 
  const[active, setActive] = useState<boolean>(false)


  const getData = async() => {
    setLoading(true)
    try{
      const res =  await useGetProductById(id)
      const productData: IProducts = {
        name: res.name,
        brand: res.brand,
        $id: res.$id,
        description: res.description,
        country: res.country,
        image: res.image,
        code: res.code,
        sold: res.sold,
        category: res.category,
        price: res.price
      };
      setProduct(productData);
      setLoading(false)
    }catch(error){
      setLoading(false)
      throw error
    }
  }

  useEffect(() => {
    
    if (isOpen) {
      getData();
    }
  }, [id, isOpen])

  return (
    
    <>
     
      <Dialog header={product?.name} visible={isOpen} className='w-[70vw]' onHide={() => toggleModal()}>
         {
          loading ? (
            <div className="absolute bg-white w-full h-[350px] left-0 top-0 rounded-xl flex items-center justify-center">
              <TbLoader3 className="text-blue-400 text-[150px] animate-spin"/>
            </div>
          ): (
            <div className='flex items-center justify-between'>
              <div className="bg-red-400 w-[50%]">

              </div>
              <div className="flex flex-col w-[50%] gap-y-[24px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-2">
                    <FaStar className="text-yellow-400 text-2xl"/> <span className="text-[#2b4fab] font-['TTInterfaceMedium']">0 ta izohlar</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FcSalesPerformance className="text-2xl"/> <span className="text-[#fba83a] font-['TTInterfaceMedium']">{product?.sold} sotilgan</span>
                  </div>
                </div>

                <div className="bg-[#f5f7fa] rounded-[16px] py-[20px] px-[24px]">
                  <div className="flex items-center justify-between mb-[24px]">
                    <span className="text-[24px] text-[#2b4fab] font-['TTInterfaceMedium']">{product?.price}</span> 
                    <span onClick={() => setActive(!active)} className="cursor-pointer">
                      {
                        active ? <FaHeart className="text-red-400 text-2xl"/> : <FaRegHeart className="text-2xl text-[#2b4fab]"/> 
                      }
                    </span>
                  </div>
                  

                  <Button className="bg-[#2b4fab] rounded-[12px] text-[16px] flex items-center justify-center py-[16px] hover:opacity-[0.8] transition-opacity w-full font-['TTInterfaceSemiBold'] border-none">  
                    Savatchaga qo'shish
                  </Button>
                </div>

                <div>
                  <div className="flex items-center mb-5">
                    <FaRegCircleCheck  className="text-[18px] text-[#2b4fab] mr-2"/><span className="text-[18px] text-[#5d5d5f]"> Ishlab chiqaruvchi davlat:</span> <span className="grow self-end  border-x-0 border-t-0 border-dashed  mx-2"></span> <span className="text-[#020105] text-[18px] font-['TTInterfaceMedium']">{product?.country}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <FaRegCircleCheck  className="text-[18px] text-[#2b4fab] mr-2"/><span className="text-[18px] text-[#5d5d5f]">Brend:</span><span className="grow self-end  border-x-0 border-t-0 border-dashed  mx-2"></span> <span className="text-[#020105] text-[18px] font-['TTInterfaceMedium']">{product?.brand}</span>
                  </div>
                </div>

                
                <Link  href="#" className="flex items-center gap-x-2">
                  <span className="text-[#1976d2] text-[18px] font-['TTInterfaceMedium']">Mahsulot haqida batafsil</span>
                  <IoIosArrowRoundForward className="text-[26px] text-[#1976d2]" />
        
                </Link>
                
                <div className="text-[14px]">
                  <p className="text-[#9a999b] mb-4">Mahsulotni ulashish</p>
                  <div className="flex items-center gap-x-5">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.bozor.com" target="_blank" className="flex items-center text-[#020105]"><FaFacebookF className="text-[24px] text-[#1976d2] mr-2" /> Facebook</a>
                    <a href="https://t.me/bozor_com" target="_blank" className="flex items-center text-[#020105]"><FaTelegramPlane className="text-[24px] text-[#1976d2] mr-2" /> Telegram</a>
                  </div>
                </div>

                <div className="flex items-center gap-x-2 text-[#9a999b] text-[14px]">
                  <span>Mahsulotni ID: </span> <span>{product?.code}</span>
                </div>
              </div>
            </div> 
          )
         }
         
        
      </Dialog> 
  </>
    
   
  )
}

export default DetailModal;