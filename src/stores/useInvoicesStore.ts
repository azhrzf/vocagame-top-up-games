import { create } from "zustand";
import { Invoice, InvoiceMetadata } from "@/types/Payment.types";
import { getInvoicesStorage, addInvoiceStorage } from "@/data/invoices";

type State = {
  invoices: Invoice[];
};

type Action = {
  addInvoice: (invoiceMetadata: InvoiceMetadata) => void;
};

export const useInvoicesStore = create<State & Action>((set) => ({
  invoices: getInvoicesStorage(),
  addInvoice: (invoiceMetadata: InvoiceMetadata) => {
    const newInvoices = addInvoiceStorage(invoiceMetadata);
    set({ invoices: newInvoices });
  },
}));
