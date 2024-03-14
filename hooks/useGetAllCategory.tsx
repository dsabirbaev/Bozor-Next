
import { database } from "@/lib/appwrite";

const useGetAllCategory = async() => {
   
    try{
        return await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_CATEGORY),
        );
        
    }catch(error){
        throw error
    }
}

export default useGetAllCategory