import type { Cart } from "../entities/Cart.entities";

export interface CartRepository {
      saveCart(cart:Cart): Promise<void>,
      getCart(): Promise< Cart | null >
      removeItem(idProduct: number): Promise<void> 
}


/* 

Extensibilidad: Podrías considerar añadir un método clearCart(): Promise<void> para cuando el usuario complete la compra y necesites vaciarlo todo de golpe.

*/