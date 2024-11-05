"use client";

import { useInvoicesStore } from "@/stores/useInvoicesStore";
import ScreenContainer from "@/components/layout/ScreenContainer";
import Banner from "@/components/feature/TrackOrderSection/Banner";
import SearchSelection from "@/components/feature/ProductSection/PaymentData/SearchSelection";
import OrderItemCard from "@/components/feature/TrackOrderSection/OrderItemCard";
import NotFound from "@/components/layout/NotFound";

const TrackOrderPage = () => {
  const invoices = useInvoicesStore((state) => state.invoices);

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
          />
          <p className="text-[#A1A1A1] text-sm">
            Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan?
            harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu
            dapat menghubungi kami via{" "}
            <span className="text-white underline">Whatsapp</span>
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold font-['Space_Grotesk']">
            Riwayat Pesanan
          </h3>
          <div className="bg-[#282828] p-6 space-y-4 rounded-lg mx-auto">
            {invoices.length > 0 ? (
              invoices.map((invoice) => (
                <OrderItemCard key={invoice.id} {...invoice} />
              ))
            ) : (
              <NotFound message="Tidak ada riwayat pesanan" />
            )}
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TrackOrderPage;
