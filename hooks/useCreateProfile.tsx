


import { database, unique_id } from "@/lib/appwrite";

const useCreateProfile = async(userId: string, name: string, email: string, phone: string) => {
    const data = {
        user_id: userId,
        name: name,
        email: email,
        phone: phone
    }
    try{
        const res = await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE),
            unique_id, 
            data
        );
        console.log(res)
    }catch(error){
        throw error
    }
}

export default useCreateProfile