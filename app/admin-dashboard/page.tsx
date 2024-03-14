"use client";
import { useState, useEffect } from "react";

//// hooks
import useGetAllUsers from "@/hooks/useGetAllUsers";
import useGetAllCategory from "@/hooks/useGetAllCategory";

//// react icons
import { FaUsers } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

import { Skeleton } from 'primereact/skeleton';
const page = () => {

  const [users, setUsers] = useState<number>();
  const [categories, setCategories] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAllUsers = async() => {
    setLoading(true)
    try{
      const res = await useGetAllUsers();
      setUsers(res.documents.length)
      setLoading(false)
    }catch(error){
      setLoading(false)
    }
  }

  const getAllCategories = async() => {
    setLoading(true)
    try{
      const res = await useGetAllCategory();
      setCategories(res.documents.length)
      setLoading(false)
    }catch(error){
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllUsers()
    getAllCategories()
  }, [])

  return (
    <div>
      <div className="flex gap-4">
        {
          loading ? (
            
            <Skeleton size="17rem"></Skeleton>
            
          ) : (
            <div className="w-[300px] h-[200px] bg-blue-400 text-white p-4 flex flex-col justify-between rounded-md">
              <p className="text-2xl font-['TTInterfaceSemiBold']">Users</p>
    
              <div className="flex items-center justify-between">
                  <span className="text-[50px] font-['TTInterfaceMedium']">{users}</span>
                  <FaUsers className="text-[70px]" />
              </div>
            </div>
          )
        }
        {
          loading ? (
            <Skeleton size="17rem"></Skeleton>
          ): (
            <div className="w-[300px] h-[200px] bg-green-400 text-white p-4 flex flex-col justify-between rounded-md">
              <p className="text-2xl font-['TTInterfaceSemiBold']">Categories</p>

              <div className="flex items-center justify-between">
                  <span className="text-[50px] font-['TTInterfaceMedium']">{categories}</span>
                  <BiSolidCategory className="text-[70px]" />
              </div>
            </div>
          )
        }

        
        
      </div>
    </div>
  )
}

export default page