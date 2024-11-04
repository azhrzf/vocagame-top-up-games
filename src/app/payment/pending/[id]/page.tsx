"use client";

import { useState } from "react";
import { ewallets } from "@/data/payment-methods";
import ScreenContainer from "@/components/layout/ScreenContainer";
import PaymentCountdown from "@/components/feature/PaymentSection/PaymentCountdown";
import PaymentMethod from "@/components/feature/PaymentSection/PaymentMethod";
import ProductItemDetail from "@/components/feature/PaymentSection/ProductItemDetail";
import CustomerService from "@/components/feature/PaymentSection/CustomerService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PaymentPage = () => {
  const [isCountdownRendered, setIsCountdownRendered] = useState(false);

  const handleCountdownRendered = () => {
    setIsCountdownRendered(true);
  };

  return (
    <section className="bg-[#1A1A1A] flex-grow pt-10 pb-20">
      <ScreenContainer className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        <SkeletonTheme baseColor="#282828" highlightColor="#444">
          <div className="lg:col-span-4">
            <PaymentCountdown onRendered={handleCountdownRendered} />
            {isCountdownRendered ? (
              <div className="mt-5">
                <PaymentMethod {...ewallets[0]} />
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <Skeleton height={275} className=" w-full rounded-xl" />
                </div>
                <div>
                  <Skeleton height={475} className=" w-full rounded-xl" />
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-8 space-y-8">
            {isCountdownRendered ? (
              <ProductItemDetail
                id="1"
                zoneId="1"
                uniqueCode="123910293132"
                user={{
                  id: "1",
                  username: "SilverWolf",
                }}
                product={{
                  id: "string",
                  name: "string",
                  image: "/assets/images/backgrounds/bg-handler.webp",
                  publisher: "string",
                  description: "string",
                  category: "string",
                  createdAt: new Date("2025-12-31T23:59:59"),
                  item: {
                    id: "string",
                    name: "string",
                    price: 4000,
                    priceDiscount: 3500,
                    iconUrl: "/assets/images/backgrounds/bg-handler.webp",
                  },
                }}
                paymentMethod={{
                  id: 1,
                  name: "Dana",
                  image: "/assets/images/payments/dana.png",
                  serviceFee: 200,
                }}
                createdAt={new Date("2025-12-31T23:59:59")}
              />
            ) : (
              <div>
                <Skeleton height={500} className="w-full rounded-xl" />
              </div>
            )}
          <CustomerService />
          </div>
        </SkeletonTheme>
      </ScreenContainer>
    </section>
  );
};

export default PaymentPage;
