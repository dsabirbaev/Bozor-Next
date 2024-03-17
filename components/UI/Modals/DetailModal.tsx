
"use client";


import { FC } from "react";
import { useState, useEffect } from 'react';



//// hooks
import useGetProductById from "@/hooks/useGetProductById";

//// store
import {useModalStoreDetail} from '@/stores/modalStore';


//// UI prime
import { Dialog } from 'primereact/dialog';

//// types
import { IProducts } from "@/types";


interface ICardID {
  id: string
}

const DetailModal: FC<ICardID & { isOpen: boolean; toggleModal: () => void }> = ({ id, isOpen, toggleModal }) => {
 
  // console.log(id)
  const [product, setProduct] = useState<IProducts>(); 
  
  
  const getData = async() => {
    try{
      const res =  await useGetProductById(id)
      const productData: IProducts = {
        name: res.name,
        brand: res.brand,
        $id: res.$id,
        description: res.description,
        country: res.country,
        image: res.image,
        code: res.code,
        sold: res.sold,
        category: res.category,
        price: res.price
      };
      setProduct(productData);
    }catch(error){
      throw error
    }
  }

  useEffect(() => {
    
    if (isOpen) {
      getData();
    }
  }, [id, isOpen])

  return (
    
    <>
      <Dialog header={product?.name} visible={isOpen} className='w-[70vw]' onHide={() => toggleModal()}>
         <div className='flex items-center justify-between'>
            <h2>modal</h2>
         </div>
         
         
          
          
          
      </Dialog> 
  </>
    
   
  )
}

export default DetailModal;