import axios from "axios";
import { Product } from "../types/Product.types";

export const getProducts = async (): Promise<Array<Product>> => {
  try {
    const { data } = await axios.get(
      "https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products"
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
