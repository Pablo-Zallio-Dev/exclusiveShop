import { create } from "zustand";
import type { Product } from "../domain/entities/Product.entities";
import { persist } from "zustand/middleware";

interface FavoriteStore {
      favorites: Product[],
      toggleFavorite: (product: Product) => void,
      isFavorite: (id: number) => boolean,
      clearFavorites: () => void
}

export const FavoriteStore = create<FavoriteStore>()(
      persist((set, get) => ({
            favorites: [],

            // Agrega o quita según si ya existe
            toggleFavorite: (product) => {
                  const { favorites } = get();
                  const isAlreadyFav = favorites.some((fav) => fav.id === product.id);

                  if (isAlreadyFav) {
                        set({
                              favorites: favorites.filter((fav) => fav.id !== product.id),
                        });
                  } else {
                        set({ favorites: [...favorites, product] });
                  }
            },

            // Función útil para pintar el corazón relleno o vacío
            isFavorite: (id) => {
                  return get().favorites.some((fav) => fav.id === id);
            },

            clearFavorites: () => set({ favorites: [] }),
      }),
            {
                  name: "favorite-storage"
            })
)