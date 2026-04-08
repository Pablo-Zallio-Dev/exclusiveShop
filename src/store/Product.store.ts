import { create } from "zustand";
import type { Product } from "../domain/entities/Product.entities";
import { apiProductRepository } from "../infrastructure/repositories/apiProductRepository";

interface ProductStore {
      productsList: Product[],
      fetchProduct: () => Product[]
}

export const ProductStore = create((set) => ({
      productsList: [],
      fetchProduct: async () => {
            const response = await apiProductRepository().getAllProducts()
            set({ productsList: response })
      }
}))