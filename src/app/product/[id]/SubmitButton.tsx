import { useState, useEffect } from "react";
import { Product } from "@/types/Product.types";
import Skeleton from "react-loading-skeleton";

interface SubmitButtonProps {
  currentProduct: Product | null;
  submitData: () => void;
}

const SubmitButton = ({ currentProduct, submitData }: SubmitButtonProps) => {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null) {
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      } else {
        submitData();
        setCountdown(null);
      }
    }
    return () => clearTimeout(timer);
  }, [countdown, submitData]);

  const handleClick = () => {
    setCountdown(3);
  };

  if (!currentProduct) {
    return (
      <div className="rounded-xl">
        <Skeleton height={75} className="w-full rounded-xl" />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="w-full p-5 rounded-lg bg-[#282828]"
      onClick={handleClick}
    >
      <p className="text-semibold">
        {countdown !== null
          ? `Beralih ke halaman pembayaran dalam ${countdown}`
          : "BUY"}
      </p>
    </button>
  );
};

export default SubmitButton;
