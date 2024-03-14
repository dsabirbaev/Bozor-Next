

import { database, unique_id } from "@/lib/appwrite";


const useCreateCategory = async(name: string) => {
    const data = {
        name: name,
    }
    try{
        await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_CATEGORY),
            unique_id, 
            data
        );
    }catch(error){
        throw error
    }
}

export default useCreateCategory