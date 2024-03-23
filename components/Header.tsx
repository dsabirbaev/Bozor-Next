"use client";

import { useEffect, useState } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



import LoginModal from './UI/Modals/LoginModal';

//// stores
import {useModalStore} from '@/stores/modalStore';
import { useProfileStore } from '@/stores/profile';


//// hooks
import useGetAllLikes from '@/hooks/useGetAllLikes';

//// react icons
import { FaThList } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";

import { Badge } from 'primereact/badge';

const Header = () => {
  
  const[wishList, setWishList] = useState<number>();

  const { toggleModal } = useModalStore();
  let { currentProfile } = useProfileStore()
  
  

  const[dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
     setDropdown(!dropdown)
  }

  const getAllLikes = async() => {
    try{
      const res = await useGetAllLikes();
      
      setWishList(res.documents.length)
    }catch(error){
      throw error
    }
  }
  
  useEffect(() => {
    getAllLikes()
  },[])
  return (
    <header className='bg-white'>
      <div className='container'>
        <div className="flex items-center justify-between h-[78px]"> 
          <Link href="/" title="Bosh sahifa">
            <Image priority src="https://bozor.com/_nuxt/img/logo.a6ecee7.webp" width={150} height={40} className="object-contain"  alt='logo'/>
          </Link>
          

          <div className="flex items-center justify-between cursor-pointer">
              <Link href="/catalog" title="Katalog" className="text-[12px] text-[#2B4FAB] flex items-center gap-x-2 h-[45px] px-[24px] rounded-md border-solid border-2 border-gray-100 font-bold">
                  <FaThList />
                  <span className="font-['TTInterfaceSemiBold']">Katalog</span>
              </Link>
          </div>

          <div className="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[22px] w-[340px]">
              <CiSearch className='text-[26px]' />
              <input className="placeholder:text-gray-400 placeholder:font-['TTInterfaceMedium'] ml-[16px] border-none outline-none bg-transparent w-full" type="text" placeholder="Mahsulotlarni topish" />
          </div>

          <button  className="bg-[#2B4FAB] cursor-pointer hover:opacity-[0.8] transition-opacity text-white text-[12px] font-bold flex items-center justify-center gap-x-2 rounded-md h-[45px] w-[190px] border-none outline-none">
                <FaLocationArrow  className="text-[12px] text-white"/>
                <span className='font-["TTInterfaceSemiBold"]'>Manzilini kiriting</span>
          </button>

          <div className="relative bg-[#f5f7fa] rounded-[8px] h-[45px] px-[12px] flex items-center font-['TTInterfaceMedium']">
              <div onClick={() => toggleDropdown()} className="flex items-center gap-x-2 text-[#2b4fab] text-[14px] cursor-pointer">
                  <span>UZS</span>
                  <SlArrowDown className='text-[#2b4fab]'/>
              </div>
              {
                  dropdown ? (
                      <div className="cursor-pointer absolute top-[100%] left-[-20px] bg-white rounded-[8px] py-[12px] px-[16px] w-[170px]">
                        <div className='text-[#020105] text-[16px] font-["TTInterfaceSemiBold"] mb-4'>
                          Valyutani tanlang
                        </div>
                        <div className="mb-2 text-[16px] font-['TTInterfaceMedium']"><img className='w-[20px] mr-2' src="data:image/webp;base64,UklGRlQBAABXRUJQVlA4WAoAAAAQAAAAIwAAFAAAQUxQSBcAAAABD/DA/4iIQJBtc4P501bgABH9T2jvEABWUDggFgEAAPAFAJ0BKiQAFQA+USaQRiOiIaElaABwCglmAMovXWzVsmgiHudA9QH6Vgua/xb885LEDoqJZKhoAP7xlrvARClwvz/kAtrV7D8b25q6Ldti/8e/+UxSt7M2BQ3bPM5BX/BYsvnS9Xt0wpp/Z2cGgHdUf2t/9g364f84AlfvL7spOLVdU8HWqKIDgVQNkerd3pXfXPr5SUxKV+G/50Of/AOOXZLhFF/7Uj4F/mnE9YIg5KD+5fsBP/6fw7xwNs4eI/8G4rOx+tSj+JzRbzRFiubv0A9bbAIAZhe/MezQN6mPfBkJ8MyP7bgwYwf82EX/90V/009uJqBT9JnZY7f/lt/Zl1R/N5dj+VH/7nA/jYkxlUFggAAA" alt="flag" />USD</div>
                        <div className="text-[16px] font-['TTInterfaceMedium']"><img className='w-[20px] mr-2' src="data:image/webp;base64,UklGRhABAABXRUJQVlA4WAoAAAAQAAAAIwAAGAAAQUxQSBcAAAABD/DA/4iIQJhtdAbzpy3B/SP6n9AeIQBWUDgg0gAAAPAFAJ0BKiQAGQA+USaQRiOiIaElaABwCglqAMURAD8ANMB+AH5ABGyA0gr6KFoQh2fjxGDJtJJAAPw3BgdCTPIQaD0BU2Z6Zu0346yL9Fvs5gIPF+n6YNY4aOGOb4e3H/1vt/8Hqb8+bCNd7Ppkp//8Bp/X/US/Q0CPSPg2E4Y9hXCx60JA1MOprI99V16dTXiTWXn6frqzuiYTLYvy5pOEAH0AEzFkAOoLSisYkZUzCE5079gDQb7e/o5MVH/VU8+/scmKj+HKf8OBfAbWVWwAAA==" alt="flag" /> UZS</div>
                      </div>
                  ) : null
              }     
          </div>

          <Link href="/favorites" title="Saralanganlar" className="relative flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
              <Badge className='absolute  text-[10px] right-[-8px] top-[-8px]' value={wishList}></Badge>
              <IoHeartOutline className="text-[18px]"/>
          </Link>

          <Link href="/basket" title="Savat" className="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
              
              <HiOutlineShoppingCart  className="text-[18px]"/>
          </Link>
          {
            currentProfile?.user_id ? (
              <Link href="/profile" className="cursor-pointer flex items-center rounded-md border-none bg-[#F5F7FA] h-[45px] px-[13px]">
                <FaRegUser className="text-[18px]"/>
              </Link>
            ) : (
              <div onClick={() => toggleModal()}  className="cursor-pointer flex items-center rounded-md border-none bg-[#F5F7FA] h-[45px] px-[13px]">
                <FaRegUser className="text-[18px]"/>
              </div>

            )
          }  
          
            <LoginModal/>
        </div>
      </div>
    </header>
  )
}

export default Header