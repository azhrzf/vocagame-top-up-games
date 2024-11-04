import { qris, ewallets } from "@/data/payment-methods";
import MethodCard from "./MethodCard";
import { IoIosArrowUp } from "react-icons/io";

interface PaymentMethodsProps {
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (value: string) => void;
}

const PaymentMethods = ({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}: PaymentMethodsProps) => {
  return (
    <>
      <div className="space-y-6">
        <div className="cursor-pointer flex items-center justify-between p-5 rounded-lg bg-[#3D3D3D]">
          <p className="text-semibold">QRIS</p>
          <IoIosArrowUp />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {qris.map((item) => {
            const isSelected = item.name === selectedPaymentMethod;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedPaymentMethod(item.name)}
              >
                <MethodCard {...item} selected={isSelected} />
              </button>
            );
          })}
        </div>
      </div>
      <div className="space-y-6">
        <div className="cursor-pointer flex items-center justify-between p-5 rounded-lg bg-[#3D3D3D]">
          <p className="text-semibold">E-Wallet</p>
          <IoIosArrowUp />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ewallets.map((item) => {
            const isSelected = item.name === selectedPaymentMethod;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedPaymentMethod(item.name)}
              >
                <MethodCard {...item} selected={isSelected} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
