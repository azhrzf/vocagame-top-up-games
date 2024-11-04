import Image from "next/image";
import { PaymentMethod as PaymentMethodProps } from "@/types/Payment.types";

const PaymentMethod = ({ ...method }: PaymentMethodProps) => {
  const { name, image } = method;
  return (
    <div className="bg-[#282828] px-3 py-5 space-y-5 rounded-xl">
      <div className="w-full flex items-center p-2.5 space-x-3 border border-[#5A5A5A] rounded-xl">
        <Image
          src={`/assets/images/payments/${image}`}
          alt="Mandiri"
          width={80}
          height={40}
          className="rounded-lg"
        />
        <div className="space-y-1">
          <h2 className="font-semibold">Scan QRIS</h2>
          <p className="text-[#A1A1A1] text-sm">{name}</p>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl">
        <Image
          src="/assets/images/payments/qr_code_handler.png"
          alt="Dana QRIS"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <button
        type="button"
        className="w-full bg-white text-black py-3 rounded-xl text-center"
      >
        Unduh QR Code
      </button>
    </div>
  );
};

export default PaymentMethod;
