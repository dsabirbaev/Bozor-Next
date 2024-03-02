"use client";

import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'




//// react icons
import { FaThList } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";

const Header = () => {
  
  

  
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
                  <span className="font-semibold">Katalog</span>
              </Link>
          </div>

          <div className="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[22px] w-[340px]">
              <CiSearch className='text-[26px]' />
              <input className="placeholder:text-gray-400 ml-[16px] border-none outline-none bg-transparent w-full" type="text" placeholder="Mahsulotlarni topish" />
          </div>

          <button  className="bg-[#2B4FAB] cursor-pointer hover:opacity-[0.8] transition-opacity text-white text-[12px] font-bold flex items-center justify-center gap-x-2 rounded-md h-[45px] w-[190px] border-none outline-none">
                <FaTelegram className='text-[20px]'/>
                <span>Manzilini kiriting</span>
          </button>

          <div className="text-[12px] rounded-md bg-[#F5F7FA] h-[45px] px-[13px] cursor-pointer ring-0 border-none w-fit" />


          <Link href="/favorites" title="Saralanganlar" className="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
              
              <IoHeartOutline className="text-[18px]"/>
          </Link>

          <Link href="/basket" title="Savat" className="flex items-center rounded-md bg-[#F5F7FA] h-[45px] px-[13px]">
              
              <HiOutlineShoppingCart  className="text-[18px]"/>
          </Link>

          <div title="Profil" className="flex items-center rounded-md border-none bg-[#F5F7FA] h-[45px] px-[13px] cursor-pointer">

              <FaRegUser className="text-[18px]"/>
             
          </div>

        
        </div>
      </div>
    </header>
  )
}

export default Header