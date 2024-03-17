






import { database, unique_id } from "@/lib/appwrite";

const useCreateProduct = async(name: string, brand: string, description: string, country: string, code: string, sold: string, category: string, price: string, images: string[]) => {
    const data = {
        name: name,
        brand: brand,
        description: description,
        country: country,
        code: code,
        sold: sold,
        category: category,
        price: price,
        image: images
    }
    try{
        return await database.createDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PRODUCT),
            unique_id, 
            data
        );
    }catch(error){
        throw error
    }
}

export default useCreateProduct