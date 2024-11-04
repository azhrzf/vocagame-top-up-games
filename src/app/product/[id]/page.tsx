"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useProductsStore } from "@/stores/useProductsStore";
import { Product } from "@/types/Product.types";
import ScreenContainer from "@/components/layout/ScreenContainer";
import ProductBanner from "@/components/feature/ProductDetailSection/ProductBanner";
import ItemCurrencyButton from "@/components/feature/ProductDetailSection/ProductItems/ItemCurrencyButton";
import ItemsBanner from "@/components/feature/ProductDetailSection/ProductItems/ItemsBanner";
import ItemCard from "@/components/feature/ProductDetailSection/ProductItems/ItemCard";
import UserFormBanner from "@/components/feature/ProductDetailSection/PaymentData/UserFormBanner";
import UserForm from "@/components/feature/ProductDetailSection/PaymentData/UserForm";
import PromoSection from "@/components/feature/ProductDetailSection/PaymentData/PromoSection";
import PaymentMethods from "@/components/feature/ProductDetailSection/PaymentMethods";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Divider } from "antd";

const ProductDetailPage = () => {
  const { id: productId } = useParams();
  const products = useProductsStore((state) => state.products);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [selectedItemId, setSelectedItemId] = useState("");

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("QRIS");

  useEffect(() => {
    if (products.length > 0) {
      setCurrentProduct(
        products.find((product) => product.id === productId) || null
      );
      setSelectedItemId(
        products.find((product) => product.id === productId)?.items[0].id || ""
      );
    }
  }, [products, productId]);

  return (
    <div className="bg-[#1A1A1A] flex-grow pb-20">
      <div className="h-[41rem] lg:h-52 bg-product-detail-background-gardient mb-auto"></div>
      <ProductBanner product={currentProduct} />
      <ScreenContainer className="mx-auto mt-10">
        <SkeletonTheme baseColor="#282828" highlightColor="#444">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {currentProduct ? (
              <div className="block lg:hidden bg-[#282828] p-6 rounded-xl space-y-6">
                <UserFormBanner />
                <UserForm />
              </div>
            ) : (
              <div className="block lg:hidden">
                <Skeleton height={400} className="w-full rounded-xl" />
              </div>
            )}
            {currentProduct ? (
              <div className="lg:col-span-7 h-min bg-[#282828] rounded-xl">
                <ItemsBanner>
                  <ItemCurrencyButton image={currentProduct.items[0].iconUrl} />
                  <Divider className="hidden lg:block border border-[#3E3E3E] mb-3" />
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {currentProduct.items.map((item) => {
                      const isSelected = item.id === selectedItemId;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedItemId(item.id)}
                        >
                          <ItemCard selected={isSelected} {...item} />
                        </div>
                      );
                    })}
                  </div>
                </ItemsBanner>
              </div>
            ) : (
              <div className="lg:col-span-7 w-full rounded-xl overflow-hidden">
                <Skeleton height={300} className="hidden lg:block w-full" />
              </div>
            )}
            <div className="lg:col-span-5 space-y-4">
              {currentProduct ? (
                <div className="hidden lg:block bg-[#282828] p-6 rounded-xl space-y-6">
                  <UserFormBanner />
                  <Divider className="hidden lg:block border border-[#3E3E3E]" />
                  <UserForm />
                </div>
              ) : (
                <div className="hidden lg:block">
                  <Skeleton height={500} className="w-full rounded-xl" />
                </div>
              )}
              {currentProduct ? (
                <div className="bg-[#282828] p-6 rounded-xl space-y-6">
                  <PromoSection />
                </div>
              ) : (
                <div className="rounded-xl">
                  <Skeleton height={100} className="w-full" />
                </div>
              )}
              {currentProduct ? (
                <div className="bg-[#282828] p-6 rounded-xl space-y-6">
                  <PaymentMethods
                    selectedPaymentMethod={selectedPaymentMethod}
                    setSelectedPaymentMethod={setSelectedPaymentMethod}
                  />
                </div>
              ) : (
                <div className="rounded-xl">
                  <Skeleton height={1000} className="w-full rounded-xl" />
                </div>
              )}
            </div>
          </div>
        </SkeletonTheme>
      </ScreenContainer>
    </div>
  );
};

export default ProductDetailPage;
