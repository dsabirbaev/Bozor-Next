"use client"

import Link from 'next/link'
import { useModalStoreExit } from '@/stores/modalStore';

import ExitModal from '@/components/UI/Modals/ExitModal';

//// react icons
import { RiArrowRightSLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";
import { useState } from 'react';

const Sidebar = () => {
  const [isActive, setIsActive] = useState<number>(1);
  
  const { toggleModal } = useModalStoreExit();

  const handleLinkClick = (num:number) => {
    setIsActive(num);
  };
  return (
    <>
        <div className="flex flex-col w-[300px]">
            <div className="flex items-center text-[12px] mb-10 font-['TTInterfaceMedium']">
                <Link href="/" className="text-[#2b4fab]">Bosh sahifa</Link> <RiArrowRightSLine className="text-[20px] text-[#c2c2c3]"/>  <span className="text-[#c2c2c3]">Profile</span>
            </div>

            <div className='flex'>
                <div className='bg-white rounded-[20px] p-[26px]'>
                    <ul className='flex flex-col gap-y-4 pl-0'>
                        <li>
                            <Link href="/profile" className='text-[12px] flex items-center gap-x-2' onClick={() => handleLinkClick(1)} >
                               <span className={`w-[35px] h-[35px] rounded-full ${isActive === 1 ? 'bg-[#2b4fab] text-white': 'bg-[#f5f5f7]'} flex items-center justify-center`}>
                                    <FaRegUser className="text-[16px]"/>
                                </span>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/orders" className='text-[12px] flex items-center gap-x-2' onClick={() => handleLinkClick(2)}>
                                <span className={`w-[35px] h-[35px] rounded-full ${isActive === 2 ? 'bg-[#2b4fab] text-white': 'bg-[#f5f5f7]'} flex items-center justify-center`}>  <BsCartDash className='text-[16px]' /></span> Mening buyurtmalarim
                            </Link>
                        </li>
                        <li onClick={() => toggleModal()} className='text-[12px] flex items-center gap-x-2 cursor-pointer'>
                            <span className='w-[35px] h-[35px] rounded-full bg-[#f5f5f7] flex items-center justify-center'> <RiLoginBoxLine  className='text-[16px]'/> </span>Chiqish
                        </li>
                        <ExitModal/>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar