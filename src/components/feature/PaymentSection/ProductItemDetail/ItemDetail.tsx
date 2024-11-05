import { Invoice } from "@/types/Payment.types";
import { formatDate, formatPrice } from "@/utils/helpers";
import { Divider } from "antd";

interface ItemDetailProps {
  invoice: Invoice;
  showAll?: boolean;
}

const ItemDetail = ({ invoice, showAll = false }: ItemDetailProps) => {
  const { zoneId, uniqueCode, user, product, paymentMethod, createdAt } =
    invoice;

  const { price, priceDiscount } = product.item;
  const validPrice = priceDiscount > 0 ? priceDiscount : price;

  return (
    <div className="space-y-4">
      <h3 className="hidden lg:block font-semibold">Detail</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
        <div className="space-y-3">
          <h3 className="block lg:hidden font-semibold mb-5">Detail ID Game</h3>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">Item</p>
            <p className="font-semibold">{product.item.name}</p>
          </div>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">USER ID</p>
            <p className="font-semibold">{user.id}</p>
          </div>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">ZONE ID</p>
            <p className="font-semibold">{zoneId}</p>
          </div>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">Usernmae</p>
            <p className="font-semibold">{user.username}</p>
          </div>
          {showAll && (
            <>
              <div className="hidden py-0.5 lg:block">
                <p className="text-[#A1A1A1] text-sm">Tanggal Pembelian</p>
                <p className="font-semibold">{formatDate(createdAt)}</p>
              </div>
              <div className="hidden py-0.5 lg:block">
                <p className="text-[#A1A1A1] text-sm">Metode Pembelian</p>
                <p className="font-semibold">{paymentMethod.name}</p>
              </div>
            </>
          )}
        </div>
        <Divider className="block lg:hidden border border-[#3E3E3E] mb-3" />
        <div className="space-y-2">
          <h3 className="block lg:hidden font-semibold mb-5">
            Detail Pembayaran
          </h3>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">Harga</p>
            <p className="font-semibold">Rp{formatPrice(validPrice)},-</p>
          </div>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">Fee</p>
            <p className="text-sm lg:text-base lg:font-semibold">
              Rp{formatPrice(paymentMethod.serviceFee)},-
            </p>
          </div>
          <div className="flex items-center justify-between py-0.5 lg:block">
            <p className="text-[#A1A1A1] text-sm">Kode Unik</p>
            <p className="text-xs lg:text-base lg:font-semibold">
              {uniqueCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
