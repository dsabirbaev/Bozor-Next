"use client";

import { useState, useEffect } from "react";
import Link from "next/link"


//// hooks
import useGetAllCategory from "@/hooks/useGetAllCategory";


//// stores
import { useLikesStore } from "@/stores/like";

//// react icons
import { FaRegTrashCan } from "react-icons/fa6";

//// types
import { ICategories } from "@/types";

//// css
import "./style.css"

//// card component
import ProductCard from "@/components/UI/Card/ProductCard";



const page = () => {


  const [categories, setCategories] = useState<ICategories[]>([])

  const { getAllLikes, allLikes } = useLikesStore();


  const getAllCategory = async() => {
    try{
      const res = await useGetAllCategory()
      setCategories(res?.documents.map(doc => ({
        name: doc.name,
        $id: doc.$id
      })))
    }catch(error){
      throw error
    }
  }


  


 
  useEffect(() => {
    getAllCategory()
   
  }, [])

 
 
  return (
    <section className="pt-10 pb-10">
      <div className="container p-[12px]">
        <div className="catalog-banner h-[185px] flex items-center justify-center flex-col mb-10">
            <Link href="/" className="text-white text-[14px] font-['TTInterfaceMedium']" title="Bosh sahifa">
                Bosh sahifa
            </Link>
            <h1 className="text-white font-['TTInterfaceBold'] text-[35px] my-[16px]">Saralanganlar</h1>
            <p className="text-[16px] text-white font-['TTInterfaceSemiBold']">{allLikes.length} mahsulot</p>
        </div>
      


        <div>
            <div className="flex items-center justify-between mb-5">
                <div className="text-[14px] text-[#020105] font-['TTInterfaceSemiBold'] p-[14px] w-[200px] flex items-center justify-center cursor-pointer bg-white rounded-[12px]">
                    Kategoriyalarni yashirish
                </div>
                <div title="Tozalash" className="flex items-center gap-x-2 cursor-pointer text-[#e45746]">
                    <FaRegTrashCan />
                    <span className="font-['TTInterfaceMedium'] text-[14px]">Tozalash</span>
                </div>
            </div>

            <div className="flex gap-x-5">
                <div className="bg-white w-[300px] rounded-[20px] py-[32px] px-[24px]">
                    <h2 className="text-[#353437] font-['TTInterfaceBold'] text-[24px] mb-[23px]">Kategoriya</h2>
                    <ul className="flex flex-col gap-y-4 p-0 font-['TTInterfaceSemiBold'] ">
                      {
                        categories?.map((item) => (
                          <li key={item?.$id}>{item?.name}</li>
                        ))
                      }
                    </ul>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {
                    allLikes?.map((item) => (
                      <ProductCard data={item} key={item?.$id}/>
                    ))
                  }   
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default page