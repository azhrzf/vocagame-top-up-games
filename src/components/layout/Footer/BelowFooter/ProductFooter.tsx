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
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-3">
          <Image
            src={imgSrc}
            onError={handleImageError}
            alt={firstItem.name}
            width={24}
            height={24}
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
            width={24}
            height={24}
          />
          <div className="space-y-1">
            <p className="font-semibold">QRIS</p>
            <p className="text-xs text-[#949494]">
              Biaya Layanan <span className="text-white">Rp1.500,-</span>
            </p>
          </div>
        </div>
      </div>
      <Link href="/product/1" className="bg-white p-5">
        <p className="text-black">Beli Sekarang</p>
        <div className="absolute -right-2 -top-2 h-16 w-16 overflow-hidden rounded-sm text-black">
          <div className="bg-[#939393] absolute left-0 top-0 h-2 w-2 bg-primary-300"></div>
          <div className="bg-[#939393] absolute bottom-0 right-0 h-2 w-2 bg-primary-300"></div>
          <div className="bg-[#5E5E5E] absolute bottom-0 right-0 block w-[140%] origin-bottom-right rotate-45 bg-primary-400 py-1 text-center text-[0.65rem] font-semibold shadow-sm">
            15% OFF
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductFooter;
