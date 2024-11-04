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
        <button className=" py-3 flex items-center justify-center space-x-2 border-b-2 border-white">
          <div className="w-4 h-4">
            <Image
              src={imgSrc}
              onError={handleImageError}
              alt="product"
              fill={true}
            />
          </div>
          <p className="font-semibold text-sm">{currencyName}</p>
        </button>
      </div>
      <button className="hidden lg:block border-2 rounded-xl p-0.5">
        <div className="px-3.5 py-2.5 flex items-center space-x-2 border-white">
          <div className="w-8 h-8">
            <Image
              src={imgSrc}
              onError={handleImageError}
              alt="product"
              fill={true}
            />
            <p className="font-semibold">{currencyName}</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default ItemCurrencyButton;
