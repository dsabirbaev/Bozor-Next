"use client";

import { useState, useRef, useEffect } from "react";

//// hooks
import useCreateCategory from "@/hooks/useCreateCategory";
import useGetAllCategory from "@/hooks/useGetAllCategory";


import { ICategories } from "@/types";

//// react UI
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Skeleton } from 'primereact/skeleton';

//// react icons
import { LuLoader2 } from "react-icons/lu";

import "./style.css"

const page = () => {
  const [nameCateogy, setNameCategory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCategory, setLoadingCategory] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories[]>([])
  
  const toast = useRef<Toast>(null);


  const addCategory = async() => {
    setLoading(true)
    try{
       useCreateCategory(nameCateogy);
       setNameCategory(" ");
       toast.current?.show({ severity: 'success', summary: 'Added', detail: 'Added category', life: 2000 });
       setLoading(false)
      }catch(error){       
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed network', life: 2000 });
        setLoading(false)
      }
  }

  const getAllCategory = async() => {
    setLoadingCategory(true)
    try{
        const res = await useGetAllCategory()
        setCategories(res?.documents.map(doc => ({
          name: doc.name,
          $id: doc.$id
        })))
       
    }catch(error){
      throw error
    }finally {
      setLoadingCategory(false)
    }
  }

  useEffect(() => {
    getAllCategory()
  }, [])
  return (
    <div>
        <Toast ref={toast} />
        <div className="flex justify-end gap-x-2 mb-20">
            <InputText value={nameCateogy}  onChange={(e) => setNameCategory(e.target.value)} className="w-[40rem]" placeholder="Category" />
            <Button onClick={() => addCategory()} className="flex items-center justify-center bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700 w-[10rem]">
                { 
                    loading ? (
                    <div className="flex items-center justify-center ">
                        <LuLoader2 className="animate-spin w-8 h-6"/>
                    </div>
                    ) : (
                    <span>Add</span>
                    )
                }
            </Button>
            
        </div>

        <ul className="list-category flex flex-col gap-y-2">
            {
              loadingCategory ? (
                
                  <Skeleton  height="2rem" className="mb-2" borderRadius="16px"></Skeleton>

              ) : (
                categories?.map((item, index) => (
                  <li key={item?.$id} className=" p-2 ">
                    <span>{index+1}. </span>
                    <span className="text-lg">{item?.name}</span>
                  </li>
                
                ))
              )
              
            }
        </ul>
       
    </div>
  )
}

export default page