import { ProductItem } from "./Product.types";

export interface User {
  id: string;
  username: string;
}

export interface PaymentMethod {
  id: number;
  name: string;
  image: string;
  serviceFee: number;
}

export interface Invoice {
  id: string;
  zoneId: string;
  uniqueCode: string;
  user: User;
  product: ProductItem;
  paymentMethod: PaymentMethod;
  createdAt: Date;
}