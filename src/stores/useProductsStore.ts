import { create } from "zustand";
import { Product } from "../types/Product.types";
import { getProducts } from "../data/products";

type State = {
  products: Product[];
};

type Action = {
  loadProducts: () => Promise<void>;
};

export const useProductsStore = create<State & Action>((set) => ({
  products: [],
  loadProducts: async () => {
    try {
      const data = await getProducts();
      set({ products: data });
    } catch (error) {
      console.error(error);
    }
  },
}));
