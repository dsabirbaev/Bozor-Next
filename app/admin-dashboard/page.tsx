"use client";
import { useState, useEffect } from "react";

//// hooks
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetAllCategory from "@/hooks/useGetAllCategory";
import useGetAllProducts from "@/hooks/useGetAllProducts";


//// react icons
import { FaUsers } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { HiTemplate } from "react-icons/hi";
import { BiLoaderCircle } from "react-icons/bi";



const page = () => {

  const [users, setUsers] = useState<number>();
  const [categories, setCategories] = useState<number>();
  const [products, setProducts] = useState<number>();
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
  const [loadingProducs, setLoadingProducts] = useState<boolean>(false);

  const getAllUsers = async() => {
    setLoadingUser(true)
    try{
      const res = await useGetAllUsers();
      setUsers(res.documents.length)
      setLoadingUser(false)
    }catch(error){
      setLoadingUser(false)
    }
  }

  const getAllCategories = async() => {
    setLoadingCategories(true)
    try{
      const res = await useGetAllCategory();
      setCategories(res.documents.length)
      setLoadingCategories(false)
    }catch(error){
      setLoadingCategories(false)
    }
  }

  const getAllProducts = async() => {
    setLoadingProducts(true)
    try{
      const res = await useGetAllProducts();
      setProducts(res.documents.length)
      setLoadingProducts(false)
    }catch(error){
      setLoadingProducts(false)
    }
  }

  useEffect(() => {
    getAllUsers()
    getAllCategories()
    getAllProducts()
  }, [])

  return (
    <div>
      <div className="flex gap-4">
        {
          <div className="w-[300px] h-[200px] bg-blue-400 text-white p-4 flex flex-col justify-between rounded-md">
            <p className="text-2xl font-['TTInterfaceSemiBold']">Users</p>
  
            <div className="flex items-center justify-between">
              {
                loadingUser ? (
                  <BiLoaderCircle className="animate-spin text-[50px]"/>
                ): (
                  <span className="text-[50px] font-['TTInterfaceMedium']">{users ? users : 0}</span>
                )

              }
                
                <FaUsers className="text-[70px]" />
            </div>
          </div>
          
        }
        {
         
          <div className="w-[300px] h-[200px] bg-green-400 text-white p-4 flex flex-col justify-between rounded-md">
            <p className="text-2xl font-['TTInterfaceSemiBold']">Categories</p>

            <div className="flex items-center justify-between">
              {
                loadingCategories ? (
                  <BiLoaderCircle className="animate-spin text-[50px]"/>
                ): (
                  <span className="text-[50px] font-['TTInterfaceMedium']">{categories ? categories : 0}</span>
                )

              }


                <BiSolidCategory className="text-[70px]" />
            </div>
          </div>
          
        }

        {
          
          <div className="w-[300px] h-[200px] bg-orange-400 text-white p-4 flex flex-col justify-between rounded-md">
            <p className="text-2xl font-['TTInterfaceSemiBold']">Products</p>

            <div className="flex items-center justify-between">
              {
                loadingProducs ? (
                  <BiLoaderCircle className="animate-spin text-[50px]"/>
                ): (
                  <span className="text-[50px] font-['TTInterfaceMedium']">{products ? products : 0}</span>
                )

              }
                
                <HiTemplate className="text-[70px]" />
            </div>
          </div>
          
        }

        
        
      </div>
    </div>
  )
}

export default page