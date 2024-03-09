"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { useProfileStore } from '@/stores/profile';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import { Toast } from 'primereact/toast';


const page = () =>  {
  let { setCurrentProfile, currentProfile } = useProfileStore()

  const userId = currentProfile?.user_id
 
  const [userName, setUserName] = useState<string | ''>('');
  const [userEmail, setUserEmail] = useState<string | ''>('');
 
  const toast = useRef<Toast>(null);


 


  const updateUserInfo = async () => {
    
    try {
       
        await useUpdateProfile(currentProfile?.id || '', userName, userEmail)
        setCurrentProfile(userId)
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Profil yangilandi', life: 2000 });
    } catch (error) {
        console.log(error)
    }
  }


  useEffect(() => {
   
    if (currentProfile?.name || currentProfile?.email) {
      setUserName(currentProfile.name);
      setUserEmail(currentProfile.email)
    }

  }, [currentProfile]); 
  
  
  return (
    <div className="pt-14">
      <Toast ref={toast} />
       <h2 className="text-[#020105] text-[30px] font-['TTInterfaceBold'] mb-[18px]">Profil</h2>
       
       <div className="flex flex-col gap-y-8 bg-white rounded-[20px] py-[30px] px-[32px] ">
          <div className='flex justify-between'>
            <label htmlFor="name">
              <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Toliq ism sharif</p>
              <input id='name' value={userName || ''}   onChange={(event) => setUserName(event.target.value)} type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='Ism'/>
            </label>
            <label htmlFor="phone">
              <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Telefon</p>
              <input id='phone' defaultValue={currentProfile?.phone} type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='Telefon' disabled/>
            </label>
            <label htmlFor="email">
              <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Email</p>
              <input id='email' value={userEmail || ''} onChange={(event) => setUserEmail(event.target.value)}  type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='E-mail'/>
            </label>
          </div>

          <div className='flex gap-x-4 justify-end'>
            <Link href="/" title='Bosh sahifa' className='text-[#e45746] bg-[#f5f5f7] text-[12px] py-[12px] px-[40px] rounded-[12px] hover:opacity-[0.6] transition-opacity font-["TTInterfaceSemiBold"]'>
              Bekor qilish
            </Link>
            <button onClick={() => updateUserInfo()} className='text-white bg-[#2b4fab] text-[12px] py-[12px] px-[40px] rounded-[12px] outline-none border-none cursor-pointer hover:opacity-[0.6] transition-opacity font-["TTInterfaceSemiBold"]'>
              Saqlash
            </button>
          </div>
       </div>
    </div>
  )
}


export default page
