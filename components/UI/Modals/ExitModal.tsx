
//// stores
import { useModalStoreExit } from '@/stores/modalStore';
import { useProfileStore } from '@/stores/profile';

//// UI prime react
import { Dialog } from 'primereact/dialog';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/navigation'



const ExitModal = () => {
  const { isOpen, toggleModal } = useModalStoreExit();
  let { clearProfile } = useProfileStore()
  const router = useRouter()

  const logout = async () => {
   
    try {
        await account.deleteSession('current');
        clearProfile()
        toggleModal()
        router.push("/")
        
    } catch (error) {
        console.error(error);
    }
};
  return (
    <Dialog header="Hisobingizdan chiqmoqchimisiz?" visible={isOpen} style={{ width: '40vw' }} onHide={() => toggleModal()}>
        <div className='flex gap-x-4 py-10'>
            <button onClick={() => toggleModal()} className='font-["TTInterfaceSemiBold"] border-none bg-[#f5f5f7] text-[#e45746] py-[16px] px-[80px] rounded-[12px] text-[16px] w-[48%] cursor-pointer'>
                Yo'q
            </button>
            <button onClick={() => logout()} className='font-["TTInterfaceSemiBold"] border-none bg-[#2b4fab] text-white py-[16px] px-[80px] rounded-[12px] text-[16px] w-[48%] cursor-pointer'>
                Ha
            </button>
        </div>
    </Dialog>
  )
}

export default ExitModal