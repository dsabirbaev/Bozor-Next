
import { database, unique_id } from "@/lib/appwrite";



const useCreateLike = async (userId: string, productId: string) => {
    try {
        await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_LIKE), 
            unique_id, 
        {
            user_id: userId,
            product_id: productId,
        });
    } catch (error) {
        throw error
    }
}

export default useCreateLike