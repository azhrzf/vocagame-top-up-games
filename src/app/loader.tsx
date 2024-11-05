"use client";

import { ReactNode } from "react";
import { useEffect } from "react";
import { useProductsStore } from "@/stores/useProductsStore";

const Loader = ({ children }: { children: ReactNode }) => {
  const loadProducts = useProductsStore((state) => state.loadProducts);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return <>{children}</>;
};

export default Loader;
