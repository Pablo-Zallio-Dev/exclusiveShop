import type { Product } from "../entities/Product.entities";

export interface ProductRepository {
      getOffersProduct(maxPrice: number): Promise<Product[]>
      getCategories(): Promise<string[]>
      getProductForCategory(category: string): Promise<Product[]>
      getTopRated(rating: number): Promise<Product[]>
      getAllProducts(): Promise<Product[]>
}