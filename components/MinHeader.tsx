"use client";

import { useState } from "react";
import Link from "next/link";


//// stores

import { useProfileStore } from '@/stores/profile';

//// react icons
import { FaTelegramPlane } from "react-icons/fa";
import { LiaPhoneSolid } from "react-icons/lia";
import { PiMapPinThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";

const MinHeader = () => {

  let { currentProfile } = useProfileStore()
  const[dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
     setDropdown(!dropdown)
  }
  return (
    <header className="bg-[#F5F7FA]">
        <div className="container">
            <div className="flex items-center justify-between h-[40px]">
                <div className="flex items-center space-x-1 text-[12px] font-['TTInterfaceRegular']">
                    <PiMapPinThin className="text-[15px]"/>
                    <span className="text-[#9A999B]">Manzil : </span>
                    <p>Toshkent</p>
                </div>
                <div className="flex items-center text-[12px] gap-x-5">
                      
                    <a className="flex items-center gap-x-[6px] font-['TTInterfaceRegular']" href="https://t.me/bozor_com" target="_blank" title="Bozor.com telegram">
                        <FaTelegramPlane className="text-blue-500 text-[20px]" />
                        <p className="text-[#5D5D5F]">t.me/bozor_com</p>
                    </a>

                    <a className="flex items-center gap-x-[6px] font-['TTInterfaceMedium']" title="+998 95 515 65 15" href="tel:+998 95 515 65 15">
                        <LiaPhoneSolid className="text-[20px]"/>
                        <p className="text-[#2B4FAB]">+998 95 515 65 15</p>
                    </a>
                    <div className="relative">
                        <div onClick={() => toggleDropdown()} className="flex items-center gap-x-2 text-[#9a999b] text-[14px] font-['TTInterfaceRegular'] cursor-pointer">
                            <span>Uzb</span>
                            <SlArrowDown />
                        </div>
                        {
                            dropdown ? (
                                <div className="cursor-pointer absolute top-[140%] left-[-5%] bg-white rounded-[8px] py-[12px] px-[16px] shadow-md text-[14px] text-[#9a999b] font-['TTInterfaceRegular']">
                                <div className="mb-2">Рус</div>
                                <div>Uzb</div>
                            </div>
                            ) : null
                        }

                       
                    </div>
                        {
                            currentProfile?.user_id === "65e44783c140fbe5955d" ? (
                                <Link href="/admin-dashboard" className="cursor-pointer font-bold p-2  bg-blue-600 text-white text-md">
                                    Admin
                                </Link>
                            ): null
                        }
                   
                </div>
                    
                
            </div>
     </div>
     </header>
  )
}

export default MinHeader