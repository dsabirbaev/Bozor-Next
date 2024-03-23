

import { database, Query } from "@/lib/appwrite";



const useGetLikesByUserId = async (productId: string) => {
    try {
        const response = await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_LIKE), 
            [ 
                Query.equal('product_id', productId) 
            ]
        );
        const documents = response.documents;
        const result = documents.map(doc => {
            return { 
                id: doc?.$id, 
                user_id: doc?.user_id,
                product_id: doc?.product_id
            }
        })
        
        return result
    } catch (error) {
        throw error
    }
}

export default useGetLikesByUserId