



import { database } from "@/lib/appwrite";

const useCheckUserExists = async (userId: string): Promise<boolean> =>  {
    try {
        const response = await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE)
        );
        
        const userExists = response.documents.some((item) => item.user_id === userId);
        return userExists;
      } catch (error) {
          throw error
      }
}

export default useCheckUserExists