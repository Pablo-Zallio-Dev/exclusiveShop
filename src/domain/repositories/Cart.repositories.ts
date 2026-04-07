import type { Cart } from "../entities/Cart.entities";

export interface CartRepositories {
      saveCart(cart:Cart): Promise<void>,
      getCart(): Promise< Cart | null >
      removeItem(idProduct: number): Promise<void> 
}