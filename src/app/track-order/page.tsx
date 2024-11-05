import ScreenContainer from "@/components/layout/ScreenContainer";
import Banner from "@/components/feature/TrackOrderSection/Banner";
import SearchSelection from "@/components/feature/ProductSection/PaymentData/SearchSelection";
import OrderItemCard from "@/components/feature/TrackOrderSection/OrderItemCard";

const TrackOrderPage = () => {
  const invoice = {
    id: "1",
    zoneId: "1",
    uniqueCode: "123910293132",
    user: {
      id: "1",
      username: "SilverWolf",
      phoneNumber: "021311123111",
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
          <div className="bg-[#282828] p-6 space-y-4 rounded-lg">
            <OrderItemCard {...invoice} />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TrackOrderPage;
