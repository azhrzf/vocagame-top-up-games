import Link from "next/link";
import Image from "next/image";
import useImageHandler from "@/hooks/useImageHandler";
import { trimWords } from "@/utils/helpers";
import { Product } from "@/types/Product.types";

const GameListCard = ({ id, name, publisher, image }: Product) => {
  const { imgSrc, handleImageError } = useImageHandler(image);

  return (
    <Link href={`/product/${id}`} className="grid grid-cols-1 grid-rows-3 ">
      <div className="flex justify-center row-start-1 row-end-3 z-10 col-start-1 col-end-2">
        <div className="rounded-xl h-32 w-32 p-0.5 border border-white">
          <Image
            height={125}
            width={125}
            src={imgSrc}
            onError={handleImageError}
            className="rounded-xl h-full w-full object-cover"
            alt={name}
          />
        </div>
      </div>
      <div className="bg-[#282828] rounded-tl-lg rounded-br-lg sharp-edges flex justify-center items-end row-start-2 row-end-4 col-span-1 col-end-2 mt-3">
        <div className="text-center pb-5 pt-16 space-y-1">
          <h3 className="text-sm font-bold">{trimWords(name, 3)}</h3>
          <p className="font-['Plus_Jakarta_Sans'] text-[#949494] text-xs">
            {publisher}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameListCard;
