import Link from "next/link";
import Image from "next/image";
import { useProductsStore } from "@/stores/useProductsStore";
import useImageHandler from "@/hooks/useImageHandler";
import { formatPrice } from "@/utils/helpers";

const ProductFooter = () => {
  const products = useProductsStore((state) => state.products);
  const firstItem = products[0].items[0];

  const { imgSrc, handleImageError } = useImageHandler(firstItem.iconUrl);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-3">
          <Image
            src={imgSrc}
            onError={handleImageError}
            alt={firstItem.name}
            width={50}
            height={50}
            className="hidden lg:block"
          />
          <div className="space-y-1">
            <p className="font-semibold">{firstItem.name}</p>
            <p className="text-xs text-[#949494]">
              Harga{" "}
              <span className="text-white">
                Rp{formatPrice(firstItem.price)},-
              </span>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-3">
          <Image
            src="/assets/images/payments/qris.png"
            onError={handleImageError}
            alt={firstItem.name}
            width={60}
            height={60}
          />
          <div className="space-y-1">
            <p className="font-semibold">QRIS</p>
            <p className="text-xs text-[#949494]">
              Biaya Layanan <span className="text-white">Rp1.500,-</span>
            </p>
          </div>
        </div>
      </div>
      <Link href="/product/1" className="bg-white py-2 px-3 rounded-xl">
        <p className="text-black">Beli Sekarang</p>
      </Link>
    </div>
  );
};

export default ProductFooter;
