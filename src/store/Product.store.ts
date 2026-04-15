import { create } from "zustand";
import { apiProductRepository } from "../infrastructure/repositories/apiProductRepository";
import type { Product } from "../domain/entities/Product.entities";

interface ProductStore {
      isLoading: boolean
      error: string | null

      productsList: Product[],
      fetchProducts: () => Promise<void>,

      offersProductsList: Product[],
      fetchOffersProducts: () => Promise<void>,

      categoriesList: string[],
      fetchCategories: () => Promise<void>,

      

      productForCategoryList: Product[],
      fetchProductForCategory: (category: string) => Promise<void>,

      topRatedList: Product[],
      fetchTopRatedList: () => Promise<void>,

      productMultipleImages: Product[],
      fetchProductMultipleImages: () => Promise<void>
}

export const ProductStore = create<ProductStore>((set) => ({
      isLoading: true,

      error: null,

      productsList: [],

      fetchProducts: async () => {
            try {
                  set({ isLoading: true, error: null })
                  const response = await apiProductRepository().getAllProducts()
                  set({ productsList: response, isLoading: false })

            } catch {
                  set({ error: 'Error', isLoading: false })
            }
      },

      offersProductsList: [],

      fetchOffersProducts: async () => {
            try {
                  set({ isLoading: true, error: null })
                  const response = await apiProductRepository().getOffersProducts()
                  set({ offersProductsList: response, isLoading: false })

            } catch {
                  set({ error: 'Error al cargar las ofertas', isLoading: false })
            }

      },

      categoriesList: [],

      fetchCategories: async () => {
            try {
                  set({ isLoading: true, error: null })
                  const response = await apiProductRepository().getCategories()
                  set({ categoriesList: response, isLoading: false })

            } catch {
                  set({ error: 'Error al cargarlas categorias', isLoading: false })
            }
      },

      productForCategoryList: [],

      fetchProductForCategory: async (category: string) => {
            try {
                  set({ isLoading: true, error: null })
                  const response = await apiProductRepository().getProductForCategory(category)
                  set({ productForCategoryList: response, isLoading: false })

            } catch {
                  set({ error: 'Error al cargar los productos por categorias', isLoading: false })
            }
      },

      topRatedList: [],

      fetchTopRatedList: async () => {
            try {
                  set({ isLoading: true, error: null })
                  const response = await apiProductRepository().getTopRated()
                  set({ topRatedList: response, isLoading: false })

            } catch {
                  set({ error: 'Error al vragar valorados', isLoading: false })
            }
      },

      productMultipleImages: [],

      fetchProductMultipleImages: async () => {
            try {
                  set({ isLoading: true, error: null })
                  const response = await apiProductRepository().getProductMultimpleImages()
                  set({ productMultipleImages: response, isLoading: false })
            } catch  {
                  set({ error: 'Error en la carga', isLoading: false })

            }
      }
}))