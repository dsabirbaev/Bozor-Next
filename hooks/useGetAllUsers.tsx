


import { database } from "@/lib/appwrite";

const useGetAllUsers = async() => {
   
    try{
        return await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE),
        );
    }catch(error){
        throw error
    }
}

export default useGetAllUsers