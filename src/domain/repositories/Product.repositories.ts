import type { Product } from "../entities/Product.entities";

export interface ProductRepository {
      getAllProducts(): Promise<Product[]>
      getOffersProducts(maxPrice: number): Promise<Product[]>
      getCategories(): Promise<string[]>
      getProductForCategory(category: string): Promise<Product[]>
      getTopRated(): Promise<Product[]>
}