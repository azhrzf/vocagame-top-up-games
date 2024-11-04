import Image from "next/image";
import useImageHandler from "@/hooks/useImageHandler";
import { formatPrice } from "@/utils/helpers";
import { Item } from "@/types/Product.types";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";

interface ItemCardProps extends Item {
  selected?: boolean;
}

const ItemCard = ({ selected = false, ...item }: ItemCardProps) => {
  const { name, price, priceDiscount, iconUrl } = item;
  const { imgSrc, handleImageError } = useImageHandler(iconUrl);

  const discountValid = price > priceDiscount && priceDiscount > 0;

  const discountPercentage = () => {
    if (discountValid) {
      return ((price - priceDiscount) / price) * 100;
    }

    return 0;
  };

  return (
    <div
      className={clsx(
        "h-full cursor-pointer font-['Manrope'] border rounded-xl gap-x-3 backdrop-blur-xl",
        selected ? "bg-[#3E3E3E] border-white" : "border-[#3E3E3E]"
      )}
    >
      <div className="py-3 pl-3 pr-3 lg:pr-7 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="space-y-1">
            {name.split(" (").map((text, index, array) => (
              <p key={text} className="font-semibold text-xs lg:text-sm">
                {array.length > 1 && index === array.length - 1 && " ("}
                {text}
              </p>
            ))}
            <p className="text-[#24CB39] text-xs">
              Rp{" "}
              {discountValid ? formatPrice(priceDiscount) : formatPrice(price)}
              ,-
            </p>
            {discountValid && (
              <p className="text-[#949494] line-through text-xs">
                Rp {formatPrice(price)},-
              </p>
            )}
          </div>
          <Image
            src={imgSrc}
            width={24}
            height={24}
            onError={handleImageError}
            alt={name}
          />
        </div>
      </div>
      {selected && (
        <div className="absolute bottom-0 right-0 text-[#3E3E3E] bg-white p-1 rounded-tl-xl rounded-br-xl">
          <FaCheck />
        </div>
      )}
      {discountValid && (
        <div className="absolute -right-2 -top-2 h-16 w-16 overflow-hidden rounded-sm text-black">
          <div className="bg-[#C8C8C8] absolute left-0 top-0 h-2 w-2 bg-primary-300"></div>
          <div className="bg-[#C8C8C8] absolute bottom-0 right-0 h-2 w-2 bg-primary-300"></div>
          <div className="bg-white absolute bottom-0 right-0 block w-[140%] origin-bottom-right rotate-45 bg-primary-400 py-1 text-center text-[0.65rem] font-semibold shadow-sm">
            {discountPercentage().toFixed(0)}% OFF
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
