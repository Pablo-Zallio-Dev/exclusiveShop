import type { Product } from "./Product.entities";

interface Items {
      product: Product,
      quantity: number
}

export interface Cart {
      items: Items[],
      totalItems: number,
      totalPrice: number,
}