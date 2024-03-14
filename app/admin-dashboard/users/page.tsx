"use client";

import { useEffect, useState } from 'react'
import { database } from '@/lib/appwrite'
import dayjs from 'dayjs';

import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
//// types
import { IUsers } from '@/types';
const page = () => {

  const [users, setUsers] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllUsers = async() => {
    setLoading(true);
    try{
      const res = await database.listDocuments(
        String(process.env.NEXT_PUBLIC_DATABASE_ID), 
        String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE)
      )
      
      setUsers(res?.documents.map(doc => ({
        user_id: doc.user_id,
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        $createdAt: doc.$createdAt
      })))
      setLoading(false)
    }catch(error){
      throw error
      setLoading(false);
    }
   

  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className='bg-gray-300'>
        <table className='w-full'>
          <thead className='bg-slate-400'>
            <tr>
              <th className='py-2'>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
           {
            loading ? (
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
              </tr>
            ) : (
                users?.map((item) => (
                  <tr key={item?.user_id}>
                    <th className='py-3'>{ item?.user_id}</th>
                    <th>{ item?.name }</th>
                    <th>{ item?.email }</th>
                    <th>{ item?.phone }</th>
                    <th>{ dayjs(item.$createdAt).format('DD-MM-YYYY') }</th>
                  </tr>
                ))
            ) 
           }
            
          </tbody>
        </table>
    </div>
  )
}

export default page