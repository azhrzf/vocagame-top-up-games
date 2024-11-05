import { PaymentMethod } from "@/types/Payment.types";

export const vocaCredit = [
  {
    id: "voca-credit-1",
    name: "VocaCredit",
    image: "qris.png",
    serviceFee: 1500,
    type: "voca-credit",
  },
];

export const qris = [
  {
    id: "qris-1",
    name: "QRIS",
    image: "qris.png",
    serviceFee: 1500,
    type: "qris",
  },
];

export const ewallets = [
  {
    id: "ewallet-1",
    name: "DANA",
    image: "dana.png",
    serviceFee: 1500,
    type: "ewallet",
  },
  {
    id: "ewallet-2",
    name: "OVO",
    image: "ovo.png",
    serviceFee: 1500,
    type: "ewallet",
  },
  {
    id: "ewallet-3",
    name: "LinkAja",
    image: "linkaja.png",
    serviceFee: 1500,
    type: "ewallet",
  },
  {
    id: "ewallet-4",
    name: "Shopee Pay",
    image: "shopeepay.png",
    serviceFee: 1500,
    type: "ewallet",
  },
];

export const allPaymentMethods: PaymentMethod[] = [
  ...vocaCredit,
  ...qris,
  ...ewallets,
];
