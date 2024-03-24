import { create } from 'zustand';

import useGetAllLikes from '@/hooks/useGetAllLikes';
import useGetProductById from '@/hooks/useGetProductById';

import { ILikesStore } from '@/types';
  


export const useLikesStore = create<ILikesStore>((set) => ({
  allLikes: [],
  getAllLikes: async () => {
    try {
      const res = await useGetAllLikes();

      const productPromises = res.documents.map(async (doc) => {
        const product = await useGetProductById(doc.product_id);

        return {
          name: product.name,
          brand: product.brand,
          $id: product.$id,
          description: product.description,
          country: product.country,
          image: product.image,
          code: product.code,
          sold: product.sold,
          category: product.category,
          price: product.price
        };
      });

      const products = await Promise.all(productPromises);

      set({ allLikes: products });
    } catch (error) {
      throw error;
    }
  }
}));

