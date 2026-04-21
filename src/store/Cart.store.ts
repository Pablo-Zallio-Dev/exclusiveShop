import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../domain/entities/Product.entities";

export interface CartItem {
      product: Product;
      quantity: number;
}

interface CartStore {
      isLoading: boolean;
      error: string | null;
      cartItems: CartItem[];
      viewCart: boolean;
      setViewCart: () => void;
      addProductToCart: (product: Product) => void;
      incrementQuantity: (id: number) => void;
      decrementQuantity: (id: number) => void;
      getTotalItems: () => number;
      getTotalPrice: () => number;
      clearCart: () => void;
      clearProduct: (id: number) => void;
      finishLoading: () => void;
}

export const CartStore = create<CartStore>()(
      persist(
            (set, get) => ({
                  isLoading: true,
                  error: null,
                  cartItems: [],
                  viewCart: false,
                  setViewCart: () => set((state) => ({
                        viewCart: !state.viewCart
                  })),
                  //Agrega producto al carro
                  addProductToCart: (product) =>
                        set((state) => {

                              const existingProduct = state.cartItems.find(
                                    (item) => item.product.id === product.id,
                              );

                              if (existingProduct) {
                                    return state
                              }

                              return {

                                    cartItems: [...state.cartItems, { product: product, quantity: 1 }],
                              };
                        }),

                  //sumamos cantidad de productos
                  incrementQuantity: (id: number) =>
                        set((state) => ({
                              cartItems: state.cartItems.map((item) =>
                                    item.product.id === id
                                          ? { ...item, quantity: item.quantity + 1 }
                                          : item,
                              ),
                        })),

                  //restamos / eliminamos del carrito
                  decrementQuantity: (id: number) =>
                        set((state) => {
                              const targetItem = state.cartItems.find(
                                    (item) => item.product.id === id,
                              );

                              if (targetItem?.quantity === 1) {
                                    return {
                                          cartItems: state.cartItems.filter(
                                                (item) => item.product.id !== id,
                                          ),
                                    };
                              }
                              return {
                                    cartItems: state.cartItems.map((item) =>
                                          item.product.id === id
                                                ? { ...item, quantity: item.quantity - 1 }
                                                : item,
                                    ),
                              };
                        }),

                  getTotalItems: () => {
                        const { cartItems } = get(); // Usamos get() para leer el estado actual
                        return cartItems.reduce((total, item) => total + item.quantity, 0);
                  },

                  getTotalPrice: () => {
                        const { cartItems } = get();
                        return cartItems.reduce(
                              (total, item) => total + item.product.price * item.quantity,
                              0,
                        );
                  },

                  clearCart: () => set({ cartItems: [] }),

                  clearProduct: (id: number) =>
                        set((state) => ({
                              cartItems: state.cartItems.filter((item) => item.product.id !== id),
                        })),

                  finishLoading: () => set({ isLoading: false }),
                 
                 
            }),
            {
                  name: "cart-storage",
                  onRehydrateStorage: () => (state) => {
                        state?.finishLoading();
                  },
            },
      ),
);
