import Image from "next/image";
import useImageHandler from "@/hooks/useImageHandler";

interface ItemCurrencyButtonProps {
  currencyName?: string;
  image: string;
}

const ItemCurrencyButton = ({
  currencyName = "Diamonds",
  image,
}: ItemCurrencyButtonProps) => {
  const { imgSrc, handleImageError } = useImageHandler(image);

  return (
    <>
      <div className="grid grid-cols-2 lg:hidden bg-[#1A1A1A] rounded-xl overflow-hidden">
        <button type="button" className=" py-3 flex items-center justify-center space-x-2 border-b-2 border-white">
          <Image
            src={imgSrc}
            onError={handleImageError}
            alt="product"
            width={16}
            height={16}
          />
          <p className="font-semibold text-sm">{currencyName}</p>
        </button>
      </div>
      <button type="button" className="hidden lg:block border-2 rounded-xl p-0.5">
        <div className="px-3.5 py-2.5 flex items-center space-x-2 border-white">
          <Image
            src={imgSrc}
            onError={handleImageError}
            alt="product"
            width={32}
            height={32}
          />
          <p className="font-semibold">{currencyName}</p>
        </div>
      </button>
    </>
  );
};

export default ItemCurrencyButton;
