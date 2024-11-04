import Image from "next/image";
import { PaymentMethod } from "@/types/Payment.types";
import { formatPrice } from "@/utils/helpers";
import clsx from "clsx";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

interface SmallMethodCardProps extends PaymentMethod {
  selected?: boolean;
}

const SmallMethodCard = ({
  selected = false,
  ...item
}: SmallMethodCardProps) => {
  return (
    <div
      key={item.id}
      className={clsx(
        "h-full flex items-center justify-between space-x-3 cursor-pointer bg-[#232323] p-3 rounded-xl",
        selected && "border border-white"
      )}
    >
      <Image
        src={`/assets/images/payments/${item.image}`}
        width={48}
        height={48}
        alt={item.name}
      />
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-xs">
          <span className="text-[#949494]">Biaya Layanan: </span>
          <span className="text-semibold">
            + Rp {formatPrice(item.servicePrice)},-
          </span>
        </p>
      </div>
      <div className="text-xl">
        {selected ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
      </div>
    </div>
  );
};

export default SmallMethodCard;
