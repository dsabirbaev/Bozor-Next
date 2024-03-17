"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

//// hooks
import useGetAllCategory from "@/hooks/useGetAllCategory";
import useCreateProduct from '@/hooks/useCreateProduct';


//// types
import { ICategories } from "@/types";


//// react UI
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';



//// image api
import { UploadButton } from '@/app/utils/uploadthing';
import "@uploadthing/react/styles.css";

//// react icons
import { LuLoader2 } from "react-icons/lu";


const page = () => {

  //// det data from input
  const[name, setName] = useState<string>("");
  const[brand, setBrand] = useState<string>("");
  const[description, setDescription] = useState<string>("");
  const[country, setCountry] = useState<string>("");
  const[code, setCode] = useState<string>("");
  const[sold, setSold] = useState<string>("");
  const[price, setPrice] = useState<string>("");
  const[categoryName, setCategoryName] = useState<string>("");
  const[images, setImages] = useState<string[]>([]);

  //// get data
  const [categories, setCategories] = useState<ICategories[]>([])
 

  //// loaders
  const [loading, setLoading] = useState<boolean>(false);
 

  const toast = useRef<Toast>(null);

  const addProduct = async() => {
    setLoading(true)
    try{
      
       await useCreateProduct(name, brand, description, country, code, sold, categoryName, price, images);
       toast.current?.show({ severity: 'success', summary: 'Added', detail: 'Added product', life: 2000 });
       setLoading(false)
       setName('')
       setBrand('')
       setDescription('')
       setCountry('')
       setCode('')
       setSold('')
       setPrice('')
       setCategoryName('')
       setImages([])
    }catch(error){
      setLoading(false)
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed network', life: 2000 });
      console.log(error)
    }
  }

  const getAllCategory = async() => {
    
    try{
        const res = await useGetAllCategory()
        setCategories(
          res?.documents.map((doc) => ({
            name: doc.name,
            $id: doc.$id,
          }))
        );
    }catch(error){
     
    }
  }

  
  useEffect(() => {
    getAllCategory();
    
  }, [])


  return (
    <div>
      <Toast ref={toast} />
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-y-2 justify-between'>
          <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder='Name product' className='w-[35rem]'/>
          
          <InputText value={brand} onChange={(e) => setBrand(e.target.value)} placeholder='Brand product' className='w-[35rem]'/>
          <InputText value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Production country' className='w-[35rem]'/>
          <InputText value={code} onChange={(e) => setCode(e.target.value)} placeholder='Code product' className='w-[35rem]'/>
          <InputText value={sold} onChange={(e) => setSold(e.target.value)} placeholder='Count sold' className='w-[35rem]'/>
          <InputText value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' className='w-[35rem]'/>

          <div className='relative'>
            <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} rows={7} className='w-[35rem]' placeholder='Description' />
            <p className="absolute right-2 bottom-3 text-[12px] text-gray-500">{description ? description.length : 0}/200</p>
          </div>

          <select className='p-2 w-[35rem] text-gray-500 text-[16px]' onChange={(e) => setCategoryName(e.target.value)}>
            <option defaultValue="Category">Category</option>
            {
              categories?.map((item) =>(
                
                <option value={item?.name} key={item?.$id}>{item?.name}</option>
              ))
            }
            
          </select>    


         
        </div>
        <div className='w-full flex flex-col justify-between'>

          <div>
            <h2 className='text-center mb-5'>Image upload</h2>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImages(prevImages => [...prevImages, res[0].url]);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <div className='grid grid-cols-3 gap-2 mb-4'>
            {
            images.length > 0 &&
            images.map((imageUrl, index) => (
                <Image key={index} src={imageUrl} width={200} height={200} alt={`image-${index}`} className='bg-red w-full object-contain rounded-md' />
            ))
            }
          </div>
          
         
          
          <Button onClick={() => addProduct()} className="flex items-center justify-center bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700 w-full">
              { 
                  loading ? (
                    <div className="flex items-center justify-center ">
                        <LuLoader2 className="animate-spin w-8 h-6"/>
                    </div>
                  ) : (
                    <span>Add Product</span>
                  )
              }
          </Button>

        </div>
      </div>
      

      
    </div>
  )
}

export default page