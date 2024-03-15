"use client";

import { useState, useEffect } from "react";

//// hooks
import useGetAllProducts from "@/hooks/useGetAllProducts";


//// types
import { IProducts } from '@/types';

//// react UI
import { Skeleton } from 'primereact/skeleton';


const page = () => {

  const [products, setProducts] = useState<IProducts[]>([]);
  const [loadingProducs, setLoadingProducts] = useState<boolean>(false);


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
    getAllProducts();
  }, [])
  return (
    <div>
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