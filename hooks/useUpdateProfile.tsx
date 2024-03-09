


import { database } from "@/lib/appwrite";

const useUpdateProfile = async (id: string, name: string, email: string) => {
    
    try {
        await database.updateDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE), 
            id, 
        {
            name: name,
            email: email
        });

        
    } catch (error) {
        throw error
    }
}

export default useUpdateProfile