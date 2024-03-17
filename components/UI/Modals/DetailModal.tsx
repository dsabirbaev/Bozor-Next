


import { useState } from 'react';

//// store
import {useModalStoreDetail} from '@/stores/modalStore';




//// UI prime
import { Dialog } from 'primereact/dialog';




const DetailModal = () => {
  
  
  const { isOpen, toggleModal } = useModalStoreDetail();
  
  return (
    
    <>
      <Dialog header="Detail" visible={isOpen} style={{ width: '40vw' }} onHide={() => toggleModal()}>
         <div className='flex items-center justify-between'>
            <h2>modal</h2>
         </div>
         
         
          
          
          
      </Dialog> 
  </>
    
   
  )
}

export default DetailModal;