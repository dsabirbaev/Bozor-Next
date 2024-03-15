



import { database } from "@/lib/appwrite";

const useGetAllProducts = async() => {
   
    try{
        return await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PRODUCT),
        );
    
    }catch(error){
        throw error
    }
}

export default useGetAllProducts