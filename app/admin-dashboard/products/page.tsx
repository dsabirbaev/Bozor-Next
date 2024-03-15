"use client";

import { useState, useEffect } from 'react';

import { database, unique_id } from '@/lib/appwrite';


//// hooks
import useGetAllCategory from "@/hooks/useGetAllCategory";


//// types
import { ICategories } from "@/types";

//// react UI
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';



//// react icons
import { LuLoader2 } from "react-icons/lu";

const page = () => {


  const[name, setName] = useState<string>("");
  const[brand, setBrand] = useState<string>("");
  const[description, setDescription] = useState<string>("");
  const[country, setCountry] = useState<string>("");
  const[code, setCode] = useState<string>("");
  const[sold, setSold] = useState<string>("");
  const[price, setPrice] = useState<string>("");
  const[categoryName, setCategoryName] = useState<string>("");
 
  const [categories, setCategories] = useState<ICategories[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  const addProduct = async() => {
    const data = {
      name: name,
      brand: brand,
      description: description,
      country: country,
      code: code,
      sold: sold,
      category: categoryName,
      price: price
    }
    // console.log(data)
    try{

      const res =  await database.createDocument(
        String(process.env.NEXT_PUBLIC_DATABASE_ID), 
        String(process.env.NEXT_PUBLIC_COLLECTION_ID_PRODUCT),
        unique_id, 
        data
      );
      
      console.log(res)
    }catch(error){
      throw error
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
      <div className='flex flex-col gap-y-2'>
        <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder='Name product' className='w-[35rem]'/>
        
        <InputText value={brand} onChange={(e) => setBrand(e.target.value)} placeholder='Brand product' className='w-[35rem]'/>
        <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} rows={7} className='w-[35rem]' placeholder='Description' />
        <InputText value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Production country' className='w-[35rem]'/>
        <InputText value={code} onChange={(e) => setCode(e.target.value)} placeholder='Code product' className='w-[35rem]'/>
        <InputText value={sold} onChange={(e) => setSold(e.target.value)} placeholder='Count sold' className='w-[35rem]'/>
        <InputText value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' className='w-[35rem]'/>

        <select className='p-2 w-[35rem] text-gray-500 text-[16px]' onChange={(e) => setCategoryName(e.target.value)}>
          <option defaultValue="Category">Category</option>
          {
            categories?.map((item) =>(
              
              <option value={item?.name} key={item?.$id}>{item?.name}</option>
            ))
          }
          
        </select>    


        <Button onClick={() => addProduct()} className="flex items-center justify-center bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700 w-[10rem]">
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
  )
}

export default page