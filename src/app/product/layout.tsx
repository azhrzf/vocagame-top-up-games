import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Top Up Games",
  description: "Product | Top Up Games",
};

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default ProductLayout;
