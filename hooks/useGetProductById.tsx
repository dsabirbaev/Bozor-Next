

import { database } from '@/lib/appwrite';



const useGetProductById = async (id: string) => {
    try {
        return await database.getDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PRODUCT),
            id
        );
       
      } catch (error) {
          throw error
      }
}

export default useGetProductById