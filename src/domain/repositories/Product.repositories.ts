import type { Product } from "../entities/Product.entities";

export interface ProductRepository {
      getAllProducts(): Promise<Product[]>
      getOffersProducts(): Promise<Product[]>
      getCategories(): Promise<string[]>
      getProductForCategory(category: string): Promise<Product[]>
      getProductForBanner(category: string): Promise<Product[]>
      getTopRated(): Promise<Product[]>
      getProductMultimpleImages(): Promise<Product[]>
      getProductSearch(product: string): Promise<Product[]>
}