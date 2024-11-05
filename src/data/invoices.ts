import { Invoice, InvoiceMetadata } from "@/types/Payment.types";
import { getUniqueTime } from "@/utils/helpers";

export function getInvoicesStorage(): Invoice[] {
  try {
    if (typeof window === "undefined") {
      return [];
    }

    if (localStorage.getItem("invoices") === null) {
      localStorage.setItem("invoices", JSON.stringify([]));
    }

    const item = localStorage.getItem("invoices");

    return item ? JSON.parse(item) : [];
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export function addInvoiceStorage(
  newInvoiceMetadata: InvoiceMetadata
): Invoice[] {
  try {
    if (typeof window === "undefined") {
      return [];
    }

    const invoices = getInvoicesStorage();

    const newInvoice = {
      ...newInvoiceMetadata,
      uniqueCode: `CODE-${getUniqueTime()}`,
      createdAt: new Date(),
    };

    const newInvoices = [...invoices, newInvoice];

    localStorage.setItem("invoices", JSON.stringify(newInvoices));

    return newInvoices;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
