

import { database, Query } from "@/lib/appwrite";

const useGetProfileByUserId = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE), 
            [ 
                Query.equal('user_id', userId) 
            ]
        );
        const documents = response.documents;
        
        return {
            id: documents[0]?.$id,
            user_id: documents[0]?.user_id,
            name: documents[0]?.name,
            phone: documents[0]?.phone,
            email: documents[0]?.email
        }
      } catch (error) {
          throw error
      }
}

export default useGetProfileByUserId