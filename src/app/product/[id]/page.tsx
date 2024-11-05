"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useParams, redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { useProductsStore } from "@/stores/useProductsStore";
import { useInvoicesStore } from "@/stores/useInvoicesStore";
import { Product, Item } from "@/types/Product.types";
import { InvoiceOrder, PaymentMethod } from "@/types/Payment.types";
import { allPaymentMethods } from "@/data/payment-methods";
import { getUniqueTime } from "@/utils/helpers";
import ScreenContainer from "@/components/layout/ScreenContainer";
import ProductBanner from "@/components/feature/ProductSection/ProductBanner";
import ItemSection from "./ItemSection";
import MergeUserForm from "./MergeUserForm";
import SearchPromoSection from "./SearchPromoSection";
import PaymentMethodsSection from "./PaymentMethodsSection";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SubmitButton = dynamic(() => import("./SubmitButton"), { ssr: false });

const ProductDetailPage = () => {
  const { id: productId } = useParams();
  const products = useProductsStore((state) => state.products);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [selectedItemId, setSelectedItemId] = useState("1");

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("ewallet-1");

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

  const addInvoice = useInvoicesStore((state) => state.addInvoice);
  const { register, handleSubmit, formState } = useForm<InvoiceOrder>({
    defaultValues: {
      userId: "",
      userPhoneNumber: "",
      zoneId: "",
      paymentMethodId: "ewallet-1",
    },
  });

  const onSubmit = (data: InvoiceOrder) => {
    if (currentProduct) {
      const newId = `ID-${getUniqueTime()}`;
      const { items, ...selectedProduct } = currentProduct;
      const selectedItem = items.find(
        (item: Item) => item.id === selectedItemId
      ) as Item;
      const usedPaymentMethod = allPaymentMethods.find(
        (method) => method.id === selectedPaymentMethod
      ) as PaymentMethod;
      addInvoice({
        id: newId,
        zoneId: data.zoneId,
        user: {
          id: data.userId,
          username: "SilverWolf",
          phoneNumber: data.userPhoneNumber,
        },
        product: {
          ...selectedProduct,
          item: selectedItem,
        },
        paymentMethod: usedPaymentMethod,
      });
      redirect(`/payment/pending/${newId}`);
    }
  };

  const submitData = handleSubmit(onSubmit);

  return (
    <section className="bg-[#1A1A1A] flex-grow pb-20">
      <div className="h-[41rem] lg:h-52 bg-product-detail-background-gardient mb-auto"></div>
      <ProductBanner product={currentProduct} />
      <ScreenContainer className="mx-auto mt-10">
        <SkeletonTheme baseColor="#282828" highlightColor="#444">
          <form
            onSubmit={submitData}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5"
          >
            <div className="hidden lg:block lg:col-span-7 h-min bg-[#282828] rounded-xl">
              <ItemSection
                currentProduct={currentProduct}
                selectedItemId={selectedItemId}
                setSelectedItemId={setSelectedItemId}
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#282828] p-6 rounded-xl space-y-6">
                <MergeUserForm
                  register={register}
                  formState={formState}
                  currentProduct={currentProduct}
                />
              </div>
              <div className="block lg:hidden bg-[#282828] rounded-xl">
                <ItemSection
                  currentProduct={currentProduct}
                  selectedItemId={selectedItemId}
                  setSelectedItemId={setSelectedItemId}
                />
              </div>
              <div className="bg-[#282828] p-6 rounded-xl space-y-4">
                <SearchPromoSection currentProduct={currentProduct} />
              </div>
              <div className="bg-[#282828] p-6 rounded-xl space-y-6">
                <PaymentMethodsSection
                  currentProduct={currentProduct}
                  selectedPaymentMethod={selectedPaymentMethod}
                  setSelectedPaymentMethod={setSelectedPaymentMethod}
                />
              </div>
              <SubmitButton
                currentProduct={currentProduct}
                submitData={submitData}
              />
            </div>
          </form>
        </SkeletonTheme>
      </ScreenContainer>
    </section>
  );
};

export default ProductDetailPage;
