import { Product } from "@/types/Product.types";
import SearchSelection from "@/components/feature/ProductSection/PaymentData/SearchSelection";
import PromoButton from "@/components/feature/ProductSection/PaymentData/PromoButton";
import Skeleton from "react-loading-skeleton";

interface SearchPromoSectionProps {
  currentProduct: Product | null;
}

const SearchPromoSection = ({ currentProduct }: SearchPromoSectionProps) => {
  if (!currentProduct) {
    return (
      <div className="rounded-xl">
        <Skeleton height={100} className="w-full" />
      </div>
    );
  }

  return (
    <>
      <SearchSelection
        searchPlaceholder="Ketik kode promo (optional)"
        buttonPlaceholder="Gunakan"
      />
      <PromoButton />
    </>
  );
};

export default SearchPromoSection;
