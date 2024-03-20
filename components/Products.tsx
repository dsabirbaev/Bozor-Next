"use client";

import { useState, useEffect } from "react";
import ProductCard from "./UI/Card/ProductCard";
import Link from "next/link";

//// hooks
import useGetAllProducts from "@/hooks/useGetAllProducts";


import { Skeleton } from 'primereact/skeleton';

//// types
import { IProducts } from "@/types";

const Products = () => {

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
       
      }catch(error){
        throw error
      }finally{
        setTimeout(() => {
          setLoadingProducts(false)
        }, 1000);
      }
    }
  
  useEffect(() => {
    getAllProducts();
    
  }, [])
  return (
    <section className="py-10">
        <div className="container">
            <h2 className="font-['TTInterfaceBold'] text-[20px] mb-5">Produktlar</h2>

            <div className="grid grid-cols-6 gap-y-6 ">
                {
                   loadingProducs ? (
                    Array.from(Array(products.length), (_, i) => (
                      <Skeleton key={i} width="10rem" height="12rem" />
                    ))
                    ): (
                      products?.map((item) => (
                      <ProductCard data={item} key={item?.$id}/>
                    ))
                   )
                   
                }
            </div>
        </div>
    </section>
  )
}

export default Products