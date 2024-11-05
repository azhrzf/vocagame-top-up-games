"use client";

import { usePathname } from "next/navigation";
import DefaultLinks from "./DefaultLinks";
import ProductFooter from "./ProductFooter";

const BelowFooter = () => {
  const pathname = usePathname();

  return pathname.includes("/product") ? <ProductFooter /> : <DefaultLinks />;
};

export default BelowFooter;
