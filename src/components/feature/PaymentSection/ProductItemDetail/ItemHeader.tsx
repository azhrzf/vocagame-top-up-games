import { formatDate } from "@/utils/helpers";
import { RiFileCopy2Line } from "react-icons/ri";

interface ItemHeaderProps {
  id: string;
  createdAt: Date;
  paymentMethodName: string;
}

const ItemHeader = ({ id, createdAt, paymentMethodName }: ItemHeaderProps) => {
  return (
    <div className="block lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-16">
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
        <p className="font-semibold">{paymentMethodName}</p>
      </div>
    </div>
  );
};

export default ItemHeader;
