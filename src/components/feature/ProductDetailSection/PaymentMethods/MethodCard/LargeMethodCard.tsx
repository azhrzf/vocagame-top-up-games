import Image from "next/image";
import { PaymentMethod } from "@/types/Payment.types";
import { formatPrice } from "@/utils/helpers";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";

interface LargeMethodCardProps extends PaymentMethod {
  selected?: boolean;
}

const LargeMethodCard = ({
  selected = false,
  ...item
}: LargeMethodCardProps) => {
  return (
    <div
      key={item.id}
      className={clsx(
        "h-full cursor-pointer bg-[#3D3D3D] p-3 space-y-2 rounded-xl backdrop-blur-xl",
        selected && "border border-white"
      )}
    >
      <Image
        src={`/assets/images/payments/${item.image}`}
        alt={item.name}
        width={64}
        height={64}
      />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-[#949494] text-sm">Biaya Layanan</p>
        <p className="text-semibold">+ Rp {formatPrice(item.servicePrice)},-</p>
      </div>
      {selected && (
        <div className="absolute bottom-0 right-0 text-[#3E3E3E] bg-white p-1 rounded-tl-xl rounded-br-xl">
          <FaCheck />
        </div>
      )}
    </div>
  );
};

export default LargeMethodCard;
