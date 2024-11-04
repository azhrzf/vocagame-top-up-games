import { PaymentMethod } from "@/types/Payment.types";
import SmallMethodCard from "./SmallMethodCard";
import LargeMethodCard from "./LargeMethodCard";

interface MethodCardProps extends PaymentMethod {
  selected?: boolean;
}

const MethodCard = ({ selected = false, ...item }: MethodCardProps) => {
  return (
    <>
      <div className="block lg:hidden">
        <SmallMethodCard key={item.id} {...item} selected={selected} />
      </div>
      <div className="hidden lg:block">
        <LargeMethodCard key={item.id} {...item} selected={selected} />
      </div>
    </>
  );
};

export default MethodCard;
