

import { useModalStoreExit } from '@/stores/modalStore';

//// UI prime react
import { Dialog } from 'primereact/dialog';


const ExitModal = () => {
  const { isOpen, toggleModal } = useModalStoreExit();

  return (
    <Dialog header="Hisobingizdan chiqmoqchimisiz?" visible={isOpen} style={{ width: '40vw' }} onHide={() => toggleModal()}>
        <div className='flex gap-x-4 py-10'>
            <button onClick={() => toggleModal()} className='border-none bg-[#f5f5f7] text-[#e45746] py-[16px] px-[80px] rounded-[12px] text-[16px] w-[48%] cursor-pointer'>
                Yo'q
            </button>
            <button className='border-none bg-[#2b4fab] text-white py-[16px] px-[80px] rounded-[12px] text-[16px] w-[48%] cursor-pointer'>
                Ha
            </button>
        </div>
    </Dialog>
  )
}

export default ExitModal