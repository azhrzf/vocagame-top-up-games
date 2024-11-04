import Image from "next/image";
import useImageHandler from "@/hooks/useImageHandler";
import clsx from "clsx";
import { ProductItem } from "@/types/Product.types";

interface FlashSaleCardProps {
  product: ProductItem;
}

const FlashSaleCard = ({ product }: FlashSaleCardProps) => {
  const { item, image, name } = product;
  const { imgSrc, handleImageError } = useImageHandler(image);

  const discountValid =
    item.price > item.priceDiscount && item.priceDiscount > 0;

  const discountPercentage = () => {
    if (discountValid) {
      return ((item.price - item.priceDiscount) / item.price) * 100;
    }

    return 0;
  };

  return (
    <div className="bg-[#1A1A1A] rounded-lg">
      <div className="p-5 space-x-3 bg-home-card-gardient rounded-lg flex items-center ">
        <Image
          width={56}
          height={56}
          className="rounded-xl"
          objectFit="cover"
          src={imgSrc}
          onError={handleImageError}
          alt={name}
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-[#A1A1A1] text-xs">{name}</p>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <button
          className="rounded-3xl bg-[#C72323] py-2 px-5 text-sm"
          type="button"
        >
          PROMO
        </button>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <p>
              <span className={clsx(discountValid && "line-through")}>
                Rp{item.price}
              </span>
            </p>
            {discountValid && <p>Rp{item.priceDiscount}</p>}
          </div>
          <p className="text-xs text-end">
            -{discountPercentage().toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
