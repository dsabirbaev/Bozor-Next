

import { useState, useRef } from 'react';

import {useModalStore} from '@/stores/modalStore';


import { account, unique_id } from '@/lib/appwrite';

import VerifyModal from './VerifyModal';

//// UI prime
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputMask } from "primereact/inputmask";

import { LuLoader2 } from "react-icons/lu";

const LoginModal = () => {
  
  
  const { isOpen, toggleModal } = useModalStore();
  
  const [value, setValue] = useState<string>();
  const [userId, setUserId] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async () => {
    setLoading(true);
    const phoneNumber = `+998${value?.replace(/\s/g, '')}`;
    try {
        console.log(phoneNumber)
        const response = await account.createPhoneSession(
            unique_id,
            phoneNumber
        );
        toggleModal();
        setUserId(response.userId);
        setIsLoggedIn(true); 
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
  };


  return (
    
    <>
      <Dialog header="Tizimga kiring yoki profil yarating" visible={isOpen} style={{ width: '40vw' }} onHide={() => toggleModal()}>
          <label htmlFor="num" className='relative'>
             <p className='mb-3 text-black'>Telefon raqami</p>
              <span className='absolute bottom-0 left-2 text-gray-500'>+998</span>
             <InputMask id='num' onChange={(e) => setValue(e.target.value ?? '')} mask="99 999 99 99"  className='pl-14 w-full mb-5'/>
        
          </label>
         
          <Button onClick={() => login()} className="w-full flex items-center justify-center bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
            { 
                loading ? (
                  <div className="flex items-center justify-center ">
                    <LuLoader2 className="animate-spin w-8 h-6"/>
                  </div>
                ) : (
                  <span>Kirish</span>
                )
            }
          </Button>
          
          
          
      </Dialog>

      {isLoggedIn && <VerifyModal userId={userId} value={value ?? ''} />} 
    
  </>
    
   
  )
}

export default LoginModal;