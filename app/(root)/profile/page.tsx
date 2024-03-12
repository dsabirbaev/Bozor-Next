"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';


//// stores
import { useProfileStore } from '@/stores/profile';
import { useAuthStore } from '@/stores/authStore';

//// hooks
import useUpdateProfile from '@/hooks/useUpdateProfile';

import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation'


import { LuLoader2 } from "react-icons/lu";

const page = () =>  {
  let { setCurrentProfile, currentProfile } = useProfileStore()
  const { isLogin } = useAuthStore();
  const userId = currentProfile?.user_id ?? '';
 
  const [userName, setUserName] = useState<string | ''>('');
  const [userEmail, setUserEmail] = useState<string | ''>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [isNameChanged, setIsNameChanged] = useState(false);
  const [isEmailChanged, setIsEmailChanged] = useState(false);

  const toast = useRef<Toast>(null);

  const updateUserInfo = async () => {
    setLoading(true);
    try {
       
        await useUpdateProfile(currentProfile?.id || '', userName, userEmail)
        setCurrentProfile(userId)
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Profil yangilandi', life: 2000 });
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
    }
  }
  const router = useRouter()

  useEffect(() => {
   
    if (currentProfile?.name || currentProfile?.email) {
      setUserName(currentProfile.name);
      setUserEmail(currentProfile.email)
    }
    if (!isLogin) {
      router.push("/");
    }

  }, [currentProfile]); 
  
  
  return (
    <>
      {
        isLogin ? (
          <div className="pt-14">
            <Toast ref={toast} />
            <h2 className="text-[#020105] text-[30px] font-['TTInterfaceBold'] mb-[18px]">Profil</h2>
       
            <div className="flex flex-col gap-y-8 bg-white rounded-[20px] py-[30px] px-[32px] ">
                <div className='flex justify-between'>
                  <label htmlFor="name">
                    <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Toliq ism sharif</p>
                    <input id='name' value={userName || ''}   onChange={(event) => {setUserName(event.target.value);  setIsNameChanged(true);}} type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='Ism'/>
                  </label>
                  <label htmlFor="phone">
                    <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Telefon</p>
                    <input id='phone' defaultValue={currentProfile?.phone} type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='Telefon' disabled/>
                  </label>
                  <label htmlFor="email">
                    <p className='text-[12px] text-[#5d5d5f] mb-[6px]'>Email</p>
                    <input id='email' value={userEmail || ''} onChange={(event) => {setUserEmail(event.target.value); setIsEmailChanged(true);}}  type="text"  className='p-[12px] rounded-[12px] text-[#9a999b] placeholder:text-[#9a999b] outline-none w-[260px]' style={{border:'1px solid #f5f5f7'}} placeholder='E-mail'/>
                  </label>
                </div>

                <div className='flex gap-x-4 justify-end'>
                  <Link href="/" title='Bosh sahifa' className='text-[#e45746] bg-[#f5f5f7] text-[12px] py-[12px] px-[40px] rounded-[12px] hover:opacity-[0.6] transition-opacity font-["TTInterfaceSemiBold"]'>
                    Bekor qilish
                  </Link>
                  <button onClick={() => updateUserInfo()} disabled={!isNameChanged && !isEmailChanged} className='text-white bg-[#2b4fab] text-[12px] py-[12px] px-[40px] rounded-[12px] outline-none border-none cursor-pointer hover:opacity-[0.6] transition-opacity font-["TTInterfaceSemiBold"]'>
                     { 
                          loading ? (
                            <div className="flex items-center justify-center ">
                              <LuLoader2 className="animate-spin w-8 h-6"/>
                            </div>
                          ) : (
                            <span>Saqlash</span>
                          )
                      }
                  </button>
                </div>
            </div>
        </div>
        ): null
      }
    </>
    
  )
}


export default page
