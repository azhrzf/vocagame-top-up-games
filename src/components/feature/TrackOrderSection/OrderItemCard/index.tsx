import Image from "next/image";
import { Invoice } from "@/types/Payment.types";
import useImageHandler from "@/hooks/useImageHandler";
import { formatPrice } from "@/utils/helpers";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const OrderItemCard = ({ ...invoice }: Invoice) => {
  const { product, paymentMethod, createdAt } = invoice;

  const { price, priceDiscount } = product.item;
  const validPrice = priceDiscount > 0 ? priceDiscount : price;
  const totalPayment = validPrice + paymentMethod.serviceFee;

  const { imgSrc, handleImageError } = useImageHandler(product.image);

  const formattedDate = format(new Date(createdAt), "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 items-center">
      <div className="col-span-2 lg:col-span-3 flex items-center space-x-4">
        <Image
          src={imgSrc}
          onError={handleImageError}
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
      <div className="lg:col-span-3">
        <p className="text-[#A1A1A1] text-sm">Harga Produk</p>
        <p className="font-semibold">Rp{formatPrice(totalPayment)},-</p>
      </div>
      <div className="lg:col-span-3">
        <p className="text-[#A1A1A1] text-sm">Metode Pembayaran</p>
        <p className="font-semibold">{paymentMethod.name}</p>
      </div>
      <div className="lg:col-span-3">
        <p className="text-[#A1A1A1] text-sm">Tanggal Pembelian</p>
        <p className="font-semibold">{formattedDate}</p>
      </div>
    </div>
  );
};

export default OrderItemCard;
