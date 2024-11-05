"use client";

import { usePathname } from "next/navigation";
import DefaultLinks from "./DefaultLinks";
import ProductFooter from "./ProductFooter";

const BelowFooter = () => {
  const pathname = usePathname();

  return pathname === "/product" ? <ProductFooter /> : <DefaultLinks />;
};

export default BelowFooter;
