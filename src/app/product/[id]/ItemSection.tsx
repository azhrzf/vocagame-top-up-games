import { Product } from "@/types/Product.types";
import ItemCurrencyButton from "@/components/feature/ProductSection/ProductItems/ItemCurrencyButton";
import ItemsBanner from "@/components/feature/ProductSection/ProductItems/ItemsBanner";
import ItemCard from "@/components/feature/ProductSection/ProductItems/ItemCard";
import Skeleton from "react-loading-skeleton";
import { Divider } from "antd";

interface ItemSectionProps {
  currentProduct: Product | null;
  selectedItemId: string;
  setSelectedItemId: (id: string) => void;
}

const ItemSection = ({
  currentProduct,
  selectedItemId,
  setSelectedItemId,
}: ItemSectionProps) => {
  if (!currentProduct) {
    return (
      <div className="lg:col-span-7 w-full rounded-xl overflow-hidden">
        <Skeleton height={300} className="hidden lg:block w-full" />
      </div>
    );
  }

  return (
    <ItemsBanner>
      <ItemCurrencyButton image={currentProduct.items[0].iconUrl} />
      <Divider className="hidden lg:block border border-[#3E3E3E] mb-3" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {currentProduct.items.map((item) => {
          const isSelected = item.id === selectedItemId;
          return (
            <div key={item.id} onClick={() => setSelectedItemId(item.id)}>
              <ItemCard selected={isSelected} {...item} />
            </div>
          );
        })}
      </div>
    </ItemsBanner>
  );
};

export default ItemSection;
