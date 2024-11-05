import Image from "next/image";
import { Invoice } from "@/types/Payment.types";
import { formatPrice, formatDate } from "@/utils/helpers";

const OrderItemCard = ({ ...invoice }: Invoice) => {
  const { product, paymentMethod, createdAt } = invoice;

  const { price, priceDiscount } = product.item;
  const validPrice = priceDiscount > 0 ? priceDiscount : price;
  const totalPayment = validPrice + paymentMethod.serviceFee;

  return (
    <div className="grid grid-cols-2 gap-4 lg:flex lg:justify-between items-center">
      <div className="col-span-2 flex items-center space-x-4">
        <Image
          src="/assets/images/backgrounds/bg-handler.webp"
          width={45}
          height={45}
          alt="game"
          className="rounded-lg"
        />
        <div>
          <h4 className="text-[#A1A1A1] text-sm">{product.name}</h4>
          <p className="font-semibold">{product.item.name}</p>
        </div>
      </div>
      <div>
        <p className="text-[#A1A1A1] text-sm">Harga Produk</p>
        <p className="font-semibold">Rp{formatPrice(totalPayment)},-</p>
      </div>
      <div>
        <p className="text-[#A1A1A1] text-sm">Metode Pembayaran</p>
        <p className="font-semibold">{paymentMethod.name}</p>
      </div>
      <div>
        <p className="text-[#A1A1A1] text-sm">Tanggal</p>
        <p className="font-semibold">{formatDate(createdAt, true)}</p>
      </div>
      <button className="bg-[#263828] text-[#95BF00] py-1 px-5 rounded-lg">
        Success
      </button>
    </div>
  );
};

export default OrderItemCard;
