import { Product } from "@/types/Product.types";
import ScreenContainer from "../../../layout/ScreenContainer";
import LargeProductBanner from "./LargeProductBanner";
import SmallProductBanner from "./SmallProductBanner";
import clsx from "clsx";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProductBannerProps {
  product: Product | null;
}

const ProductBanner = ({ product }: ProductBannerProps) => {
  return (
    <SkeletonTheme baseColor="#FFFFFF" highlightColor="#F0EFED">
      <div className="block lg:hidden">
        <ScreenContainer className="-mt-[40rem] text-black">
          <SmallProductBanner product={product} />
        </ScreenContainer>
      </div>
      <div className="hidden lg:block">
        <ScreenContainer
          className={clsx(
            "h-[32rem] mx-auto w-full -mt-32 rounded-2xl overflow-hidden",
            product
              ? "bg-product-detail-main flex flex-col justify-end"
              : "bg-white"
          )}
        >
          <LargeProductBanner product={product} />
        </ScreenContainer>
      </div>
    </SkeletonTheme>
  );
};

export default ProductBanner;
