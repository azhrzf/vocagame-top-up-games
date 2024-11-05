import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice | Top Up Games",
  description: "Invoice | Top Up Games",
};

const InvoiceLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default InvoiceLayout;
