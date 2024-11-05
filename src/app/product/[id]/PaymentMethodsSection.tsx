import { Product } from "@/types/Product.types";
import PaymentMethods from "@/components/feature/ProductSection/PaymentMethods";
import Skeleton from "react-loading-skeleton";

interface PaymentMethodsSectionProps {
  currentProduct: Product | null;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
}

const PaymentMethodsSection = ({
  currentProduct,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}: PaymentMethodsSectionProps) => {
  if (!currentProduct) {
    return (
      <div className="rounded-xl">
        <Skeleton height={1000} className="w-full rounded-xl" />
      </div>
    );
  }

  return (
    <PaymentMethods
      selectedPaymentMethod={selectedPaymentMethod}
      setSelectedPaymentMethod={setSelectedPaymentMethod}
    />
  );
};

export default PaymentMethodsSection;
