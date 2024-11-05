"use client";

import { ReactNode } from "react";
import { useParams, notFound } from "next/navigation";
import { useInvoicesStore } from "@/stores/useInvoicesStore";
import ScreenContainer from "@/components/layout/ScreenContainer";
import PaymentMethod from "@/components/feature/PaymentSection/PaymentMethod";
import ProductItemDetail from "@/components/feature/PaymentSection/ProductItemDetail";
import CustomerService from "@/components/feature/PaymentSection/CustomerService";
import PaymentMethodSkeleton from "./PaymentMethodSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PatmentPageLayout = ({ children }: { children: ReactNode }) => {
  const { id: invoiceId } = useParams<{ id: string }>();
  const invoices = useInvoicesStore((state) => state.invoices);
  const currentInvoice = invoices.find((invoice) => invoice.id === invoiceId);

  if (!currentInvoice) {
    notFound();
  }

  return (
    <section className="bg-[#1A1A1A] flex-grow pt-10 pb-20">
      <ScreenContainer className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        <SkeletonTheme baseColor="#282828" highlightColor="#444">
          <div className="lg:col-span-4">
            {currentInvoice && children}
            {currentInvoice ? (
              <div className="mt-5">
                <PaymentMethod {...currentInvoice.paymentMethod} />
              </div>
            ) : (
              <PaymentMethodSkeleton />
            )}
          </div>
          <div className="lg:col-span-8 space-y-8">
            {currentInvoice ? (
              <>
                <ProductItemDetail {...currentInvoice} />
                <CustomerService />
              </>
            ) : (
              <div>
                <Skeleton height={500} className="w-full rounded-xl" />
              </div>
            )}
          </div>
        </SkeletonTheme>
      </ScreenContainer>
    </section>
  );
};

export default PatmentPageLayout;
