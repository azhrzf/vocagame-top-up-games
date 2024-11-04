import Image from "next/image";
import useImageHandler from "@/hooks/useImageHandler";
import { Invoice } from "@/types/Payment.types";
import { formatDate, formatPrice } from "@/utils/helpers";
import { Divider } from "antd";
import { RiFileCopy2Line } from "react-icons/ri";

const ProductItemDetail = ({ ...invoice }: Invoice) => {
  const { id, zoneId, uniqueCode, user, product, paymentMethod, createdAt } =
    invoice;

  const { imgSrc, handleImageError } = useImageHandler(product.image);

  const { price, priceDiscount } = product.item;
  const validPrice = priceDiscount > 0 ? priceDiscount : price;
  const totalPayment = validPrice + paymentMethod.serviceFee;

  return (
    <div className="flex flex-col justify-between space-y-5 bg-[#282828] rounded-xl overflow-hidden">
      <div className="block lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-16 lg:bg-[#3E3E3E] pt-4 lg:py-4 px-6">
        <div className="space-y-1">
          <p className="text-[#A1A1A1] text-sm">Tanggal Pembelian</p>
          <p className="font-semibold">{formatDate(createdAt)}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#A1A1A1] text-sm">Nomor Pesanan</p>
          <div className="flex items-center space-x-1">
            <p className="font-semibold">{id}</p>
            <RiFileCopy2Line className="text-[#A1A1A1]" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[#A1A1A1] text-sm">Metode Pembayaran</p>
          <p className="font-semibold">{paymentMethod.name}</p>
        </div>
      </div>
      <Divider className="block lg:hidden border border-[#3E3E3E] mb-3" />
      <div className="flex items-center space-x-5 px-6">
        <Image
          src={imgSrc}
          onError={handleImageError}
          width={80}
          height={80}
          alt="Product Image"
          className="rounded-lg"
        />
        <div>
          <h3 className="font-semibold text-xl font-['Space_Grotesk']">
            {product.name}
          </h3>
          <p className="text-[#A1A1A1] text-sm">{product.publisher}</p>
        </div>
      </div>
      <Divider className="border border-[#3E3E3E] mb-3" />
      <div className="px-6 space-y-4">
        <h3 className="hidden lg:block font-semibold">Detail</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="space-y-3">
            <h3 className="block lg:hidden font-semibold mb-5">
              Detail ID Game
            </h3>
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">Item</p>
              <p className="font-semibold">{product.item.name}</p>
            </div>
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">USER ID</p>
              <p className="font-semibold">{user.id}</p>
            </div>
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">ZONE ID</p>
              <p className="font-semibold">{zoneId}</p>
            </div>
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">Usernmae</p>
              <p className="font-semibold">{user.username}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">Harga</p>
              <p className="font-semibold">Rp{formatPrice(validPrice)},-</p>
            </div>
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">Fee</p>
              <p className="text-sm lg:text-base lg:font-semibold">
                Rp{formatPrice(paymentMethod.serviceFee)},-
              </p>
            </div>
            <div className="flex items-center justify-between lg:block">
              <p className="text-[#A1A1A1] text-sm">Kode Unik</p>
              <p className="text-xs lg:text-base lg:font-semibold">
                {uniqueCode}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:grid grid-cols-2 gap-5 bg-white py-5 px-6">
        <p className="font-semibold text-black">
          Total <span className="hidden lg:inline">Pembayaran</span>
        </p>
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-[#009F11]">
            Rp{formatPrice(totalPayment)},-
          </p>
          <RiFileCopy2Line className="text-black text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductItemDetail;
