"use client";

import { useState, useEffect } from "react";
import ProductCard from "./UI/Card/ProductCard";


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
        setLoadingProducts(false)
      }catch(error){
        setLoadingProducts(false)
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
                    <Skeleton width="10rem" height="12rem"></Skeleton>
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