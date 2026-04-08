import type { Product } from "./Product.entities";

interface Item {
      product: Product,
      quantity: number
}

export interface Cart {
      items: Item[],
      totalItems: number,
      totalPrice: number,
}