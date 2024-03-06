"use client"
import { useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [value, setValue] = useState('');
  
  
  return (
    <div className="pt-14">
       <h2 className="text-[#020105] text-[30px] font-['TTInterfaceBold'] mb-[18px]">Profil</h2>

       <div className="flex flex-col gap-y-8 bg-white rounded-[20px] py-[30px] px-[32px] ">
          <div className='flex justify-between'>
            <label htmlFor="name">
              <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Toliq ism sharif</p>
              <input id='name' type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='Ism'/>
            </label>
            <label htmlFor="phone">
              <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Telefon</p>
              <input id='phone' type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='Telefon'/>
            </label>
            <label htmlFor="email">
              <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Email</p>
              <input id='email' type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='E-mail'/>
            </label>
          </div>

          <div className='flex gap-x-4 justify-end'>
            <Link href="/" title='Bosh sahifa' className='text-[#e45746] bg-[#f5f5f7] text-[12px] py-[12px] px-[40px] rounded-[12px] hover:opacity-[0.6] transition-opacity font-["TTInterfaceSemiBold"]'>
              Bekor qilish
            </Link>
            <button className='text-white bg-[#2b4fab] text-[12px] py-[12px] px-[40px] rounded-[12px] outline-none border-none cursor-pointer hover:opacity-[0.6] transition-opacity font-["TTInterfaceSemiBold"]'>
              Saqlash
            </button>
          </div>
       </div>
    </div>
  )
}

export default page