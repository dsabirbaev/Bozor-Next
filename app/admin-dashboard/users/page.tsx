"use client";

import { useEffect, useState } from 'react'
import { database } from '@/lib/appwrite'
import dayjs from 'dayjs';

import { IUsers } from '@/types';
const page = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const getAllUsers = async() => {
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
    }catch(error){
      throw error
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
          <tbody className='bg-slate-200'>
           {
            users?.map((item) => (
              <tr key={item?.user_id}>
                <th className='py-3'>{ item?.user_id}</th>
                <th>{ item?.name }</th>
                <th>{ item?.email }</th>
                <th>{ item?.phone }</th>
                <th>{ dayjs(item.$createdAt).format('DD-MM-YYYY') }</th>
              </tr>
            ))
           }
            
          </tbody>
        </table>
    </div>
  )
}

export default page