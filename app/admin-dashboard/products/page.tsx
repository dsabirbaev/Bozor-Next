"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

//// hooks
import useGetAllCategory from "@/hooks/useGetAllCategory";
import useCreateProduct from '@/hooks/useCreateProduct';
import useGetAllProducts from "@/hooks/useGetAllProducts";

//// types
import { ICategories } from "@/types";
import { IProducts } from '@/types';

//// react UI
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Skeleton } from 'primereact/skeleton';


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
  const [products, setProducts] = useState<IProducts[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingProducs, setLoadingProducts] = useState<boolean>(false);

  const toast = useRef<Toast>(null);
  const addProduct = async() => {
    setLoading(true)
    try{
       await useCreateProduct(name, brand, description, country, code, sold, categoryName, price);
       toast.current?.show({ severity: 'success', summary: 'Added', detail: 'Added product', life: 2000 });
       setLoading(false)
    }catch(error){
      setLoading(false)
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed network', life: 2000 });
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

  const getAllProducts = async() => {
    setLoadingProducts(true)
    try{
      const res = await useGetAllProducts();
      setProducts(
        res?.documents.map((doc) => ({
          name: doc.name,
          brand: doc.brand,
          $id: doc.$id,
          description: doc.description,
          country: doc.country,
          image: doc.image,
          code: doc.code,
          sold: doc.sold,
          category: doc.category,
          price: doc.price

        }))
      );
      setLoadingProducts(false)
    }catch(error){
      setLoadingProducts(false)
    }
  }
  useEffect(() => {
    getAllCategory();
    getAllProducts();
  }, [])


  return (
    <div>
      <Toast ref={toast} />
      <div className='flex flex-col gap-y-2 mb-10'>
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

      <div>
        <h2 className='text-center mb-5'>Product List</h2>
        
        <div>
        <table className='w-full'>
          <thead className='bg-slate-400'>
            <tr>
              <th className='py-2'>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Country</th>
              <th>Code</th>
              <th>Sold</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
           {
            loadingProducs ? (
              <tr>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
                <th className='w-[10rem]'>
                  <Skeleton  width='10rem' className="m-1"></Skeleton>
                </th>
               
              </tr>
            ) : (
                products?.map((item) => (
                  <tr key={item?.$id} className='text-[12px]'>
                    <th className='py-3'>{ item?.$id}</th>
                    <th>{ item?.name }</th>
                    <th>{ item?.brand }</th>
                    <th>{ item?.country }</th>
                    <th>{ item?.code }</th>
                    <th>{ item?.sold }</th>
                    <th>{ item?.category }</th>
                    <th>{ item?.price }</th>
                   
                  </tr>
                ))
            ) 
           }
            
          </tbody>
        </table>
        </div>

      </div>
    </div>
  )
}

export default page