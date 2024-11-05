"use client";

import Link from "next/link";
import ItemHeader from "@/components/feature/InvoiceSection/ItemHeader";
import ItemMetadata from "@/components/feature/PaymentSection/ProductItemDetail/ItemMetadata";
import ItemDetail from "@/components/feature/PaymentSection/ProductItemDetail/ItemDetail";
import ItemFooter from "@/components/feature/PaymentSection/ProductItemDetail/ItemFooter";
import ReviewSection from "@/components/feature/InvoiceSection/ReviewSection";
import { Divider } from "antd";

const InvoicePage = () => {
  const invoice = {
    id: "1",
    zoneId: "1",
    uniqueCode: "123910293132",
    user: {
      id: "1",
      username: "SilverWolf",
    },
    product: {
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
    },
    paymentMethod: {
      id: 1,
      name: "Dana",
      image: "/assets/images/payments/dana.png",
      serviceFee: 200,
    },
    createdAt: new Date("2025-12-31T23:59:59"),
  };
  const { id, product, paymentMethod } = invoice;

  const { price, priceDiscount } = product.item;
  const validPrice = priceDiscount > 0 ? priceDiscount : price;
  const totalPayment = validPrice + paymentMethod.serviceFee;

  return (
    <div className="flex-grow bg-[#1A1A1A] py-10">
      <div className="px-6 lg:px-0 max-w-4xl mx-auto space-y-5">
        <div className="flex flex-col justify-between space-y-5 bg-[#282828] rounded-xl overflow-hidden">
          <div className="bg-[#263828] p-6">
            <ItemHeader id={id} />
          </div>
          <Divider className="block lg:hidden border border-[#3E3E3E] mb-3" />
          <div className="px-6">
            <ItemMetadata
              productName={product.name}
              productImage={product.image}
              productPublisher={product.publisher}
            />
          </div>
          <Divider className="border border-[#3E3E3E] mb-3" />
          <div className="px-6">
            <ItemDetail invoice={invoice} />
          </div>
          <div className="py-5 px-6 bg-[#009F11]">
            <ItemFooter totalPayment={totalPayment} theme="green" />
          </div>
        </div>
        <div className="px-6 py-8 space-y-4 bg-[#282828] rounded-lg">
          <ReviewSection />
          <button className="border border-white w-full text-center py-3 px-5 rounded-lg">
            Tambahkan Ulasan
          </button>
        </div>
        <div>
          <Link href="/">
            <div className="border border-white w-full text-center py-3 px-5 rounded-lg">
              Kembali ke beranda
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
