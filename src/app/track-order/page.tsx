"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useInvoicesStore } from "@/stores/useInvoicesStore";
import ScreenContainer from "@/components/layout/ScreenContainer";
import Banner from "@/components/feature/TrackOrderSection/Banner";
import SearchSelection from "@/components/feature/ProductSection/PaymentData/SearchSelection";
import OrderItemCard from "@/components/feature/TrackOrderSection/OrderItemCard";
const NotFound = dynamic(() => import("@/components/layout/NotFound"), {
  ssr: false,
});

const TrackOrderPage = () => {
  const invoices = useInvoicesStore((state) => state.invoices);

  const [searchValue, setSearchValue] = useState("");
  const filteredInvoices = invoices.filter((invoice) =>
    invoice.id.includes(searchValue)
  );

  const RenderItem = () => {
    if (invoices.length === 0) {
      return <NotFound message="Tidak ada riwayat pesanan" />;
    } else if (invoices.length > 0 && !searchValue) {
      return <NotFound message="Ketik No HP Anda" />;
    } else if (searchValue && filteredInvoices.length > 0) {
      return (
        <div className="bg-[#282828] p-6 space-y-4 rounded-lg">
          {filteredInvoices.map((invoice) => (
            <OrderItemCard key={invoice.id} {...invoice} />
          ))}
        </div>
      );
    }

    return <NotFound message="Pesanan yang anda cari tidak ditemukan" />;
  };

  return (
    <div className="flex-grow bg-[#1A1A1A] py-10">
      <ScreenContainer className="mx-auto space-y-6">
        <div className="bg-track-order-banner rounded-lg">
          <Banner />
        </div>
        <div className="bg-[#282828] p-6 space-y-4 rounded-lg">
          <SearchSelection
            searchPlaceholder="Ketik nomor HP (089******)"
            buttonPlaceholder="Cari Pesanan"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <p className="text-[#A1A1A1] text-xs lg:text-sm">
            Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan?
            harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu
            dapat menghubungi kami via{" "}
            <span className="text-white underline">Whatsapp</span>
          </p>
        </div>
        <div className="space-y-3 w-full">
          <h3 className="text-2xl font-semibold font-['Space_Grotesk']">
            Riwayat Pesanan
          </h3>
          <RenderItem />
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TrackOrderPage;
