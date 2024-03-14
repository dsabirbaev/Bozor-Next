

import { useState, useRef, useEffect } from "react";
import { FC } from "react";



import { useRouter } from 'next/navigation'
import { account } from '@/lib/appwrite';

//// stores
import { useModalStoreVerify } from '@/stores/modalStore';
import { useProfileStore } from '@/stores/profile';



//// hooks
import useCreateProfile from "@/hooks/useCreateProfile";
import useCheckUserExists from "@/hooks/useCheckUserExists";



//// react icons
import { LuLoader2 } from "react-icons/lu";
import { PiArrowClockwiseFill } from "react-icons/pi";

//// UI prime
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

interface IProps {
    value: string;
    userId: string;
}


const VerifyModal: FC<IProps> = ({ value, userId }) => {

    const { isOpen, toggleModal } = useModalStoreVerify();
    const [secret, setSecret] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [time, setTime] = useState<number>(60);
    let { setCurrentProfile, currentProfile } = useProfileStore()
    const router = useRouter()
    const toast = useRef<Toast>(null);

    const phoneNumber = `+998${value?.replace(/\s/g, '')}`;
    

    const verifyNumber = async() => {
        setLoading(true);
        try {
            const response = await account.updatePhoneSession(
                userId,
                secret
            );
            toggleModal();
            
            setLoading(false);
            setCurrentProfile(response?.userId)
            const userExists = await useCheckUserExists(response.userId);
            if (!userExists) {
                useCreateProfile(response.userId, '', '', phoneNumber);
            }
                   
            toast.current?.show({ severity: 'success', summary: 'Muvaffaqiyat', detail: 'Tizimga kirdingiz', life: 2000 });
            await router.push("/profile")
            
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.current?.show({ severity: 'error', summary: 'Xato', detail: 'Tizimda xatolik bo\'ldi', life: 2000 });
        }
    }

   

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            
            setTime((prevTime) => prevTime - 1);
        }, 1000); 
        return () => clearInterval(intervalId);

    }, []); 

  return (
    <>
        <Toast ref={toast} />
        <Dialog header="Kirish" visible={isOpen} style={{ width: '40vw' }} onHide={() => toggleModal()}>
            
            <label htmlFor="num">
                <p className='mb-3 text-black'>Telefon raqami</p>
                <InputText value={phoneNumber} className="mb-5 w-full rounded-lg" disabled/>
            
            </label>
            <label htmlFor="num">
                <p className='mb-3 text-black'>SMS Kod</p>
                <InputText className="mb-5 w-full rounded-lg"  onChange={(e) => setSecret(e.target.value)} placeholder="SMS Kodni kiriting"/>
            </label>

            <div className="mb-5">
                <p className="text-red-600 text-[14px] text-center font-medium flex items-center justify-center gap-x-2"> <PiArrowClockwiseFill className="animate-spin text-[15px]"/> Kodni qayta yuborish {time} sonya</p>
            </div>


            <Button onClick={() => verifyNumber()} className="w-full flex items-center justify-center bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
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

    </>
   
  )
}

export default VerifyModal