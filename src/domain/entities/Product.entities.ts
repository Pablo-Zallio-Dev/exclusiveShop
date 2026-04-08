export interface Product {
      id: number,
      title: string,
      description: string,
      category: string,
      price: number,
      discount: number,
      rating: number,
      stock: number,
      status: "Low Stock" | "In Stock",
      thumbnail: string,
      images: string[]
}