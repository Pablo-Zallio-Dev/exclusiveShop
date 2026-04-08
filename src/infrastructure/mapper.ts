import type { Product } from "../domain/entities/Product.entities"

interface ProductDTO {
      id: number,
      title: string,
      description: string,
      category: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number,
      availabilityStatus:  "Low Stock" | "In Stock",
      thumbnail: string,
      images: string[]
}

export const mapperProducts = (data: ProductDTO): Product => ({
      id: data.id,
      title: data.title,
      description: data.description,
      category: data.category,
      price: data.price,
      discount: data.discountPercentage,
      rating: data.rating,
      stock: data.stock,
      status: data.availabilityStatus,
      thumbnail: data.thumbnail,
      images: data.images
})

export const mapperProductList = ( array: ProductDTO[] ): Product[] => {
      return array.map((product) => (
            mapperProducts(product)
      ))
}