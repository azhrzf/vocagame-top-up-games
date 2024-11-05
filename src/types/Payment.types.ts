import { ProductItem } from "./Product.types";

export interface User {
  id: string;
  username: string;
  phoneNumber: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  image: string;
  serviceFee: number;
  type: string;
}

export interface InvoiceOrder {
  userId: string;
  userPhoneNumber: string;
  zoneId: string;
  paymentMethodId: string;
  product: ProductItem;
}

export interface InvoiceMetadata {
  id: string;
  zoneId: string;
  user: User;
  product: ProductItem;
  paymentMethod: PaymentMethod;
}

export interface Invoice extends InvoiceMetadata {
  uniqueCode: string;
  createdAt: Date;
}
