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
      <div className="flex items-center space-x-3">
        {item.image && (
          <Image
            src={`/assets/images/payments/${item.image}`}
            width={64}
            height={64}
            alt={item.name}
            className="rounded-lg"
          />
        )}
        <div className="text-start">
          <p className="font-semibold">{item.name}</p>
          <p className="text-xs">
            <span className="text-[#949494]">Biaya Layanan: </span>
            <span className="text-semibold">
              + Rp {formatPrice(item.serviceFee)},-
            </span>
          </p>
        </div>
      </div>
      <div className="text-xl">
        {selected ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
      </div>
    </div>
  );
};

export default SmallMethodCard;
