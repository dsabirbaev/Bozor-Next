import { storage, unique_id } from "@/lib/appwrite";


const useCreateImage = async(pic: string) => {
   
    try{
        const res = await storage.createFile(
            String(process.env.NEXT_PUBLIC_BUCKET_ID), 
            unique_id,
            pic
        );

        console.log(res)
    }catch(error){
        throw error
    }
}

export default useCreateImage