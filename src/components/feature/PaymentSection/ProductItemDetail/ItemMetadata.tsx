import Image from "next/image";
import useImageHandler from "@/hooks/useImageHandler";

interface ItemmetadataProps {
  productName: string;
  productImage: string;
  productPublisher: string;
}

const ItemMetadata = ({
  productName,
  productImage,
  productPublisher,
}: ItemmetadataProps) => {
  const { imgSrc, handleImageError } = useImageHandler(productImage);

  return (
    <div className="flex items-center space-x-5">
      <Image
        src={imgSrc}
        onError={handleImageError}
        width={80}
        height={80}
        alt="Product Image"
        className="rounded-lg"
      />
      <div>
        <h3 className="font-semibold text-xl font-['Space_Grotesk']">
          {productName}
        </h3>
        <p className="text-[#A1A1A1] text-sm">{productPublisher}</p>
      </div>
    </div>
  );
};

export default ItemMetadata;
