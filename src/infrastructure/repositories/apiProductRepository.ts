import type { ProductRepository } from "../../domain/repositories/Product.repositories";
import { mapperProductList } from "../mapper";

const baseURL = import.meta.env.VITE_API_URL

export const apiProductRepository = (): ProductRepository => ({

      

      getOffersProducts: async (maxPrice: number) => {
            try {
                  const response = await fetch(`${baseURL}/products`)
                  if (!response.ok) {
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                  }
                  const data = await response.json()
                  const products = mapperProductList(data.products)
                  return products.filter((product) => product.price < maxPrice)
            } catch (error) {
                  console.log(error)
                  return []
            }
      },

      getCategories: async () => {
            try {
                  const response = await fetch(`${baseURL}/products/category-list`)
                  if (!response.ok) {
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                  }
                  const data = await response.json()
                  return data

            } catch (error) {
                  console.log(error)
                  return []
            }
      },

      getProductForCategory: async (category: string) => {
            try {
                  const response = await fetch(`${baseURL}/products/category/${category}`)
                  if (!response.ok) {
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                  }
                  const data = await response.json()
                  const products = mapperProductList(data.products)
                  return products
            } catch (error) {
                  console.log(error)
                  return []
            }
      },
      getTopRated: async () => {
            try {
                  const response = await fetch(`${baseURL}/products`)
                  if (!response.ok) {
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                  }
                  const data = await response.json()
                  const products = mapperProductList(data.products)
                  return products.filter((product) => product.rating > 4)

            } catch (error) {
                  console.log(error)
                  return []
            }
      },
      getAllProducts: async () => {
            try {
                  const response = await fetch(`${baseURL}/products`)
                  if (!response.ok) {
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                  }
                  const data = await response.json()
                  const products = mapperProductList(data.products)
                  return products
            } catch (error) {
                  console.log(error)
                  return []
            }
      }

})

