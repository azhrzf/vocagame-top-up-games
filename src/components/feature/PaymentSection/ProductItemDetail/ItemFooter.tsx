import { formatPrice } from "@/utils/helpers";
import clsx from "clsx";
import { RiFileCopy2Line } from "react-icons/ri";

interface ItemFooterProps {
  totalPayment: number;
  theme?: "default" | "green";
}

const ItemFooter = ({ totalPayment, theme = "default" }: ItemFooterProps) => {
  return (
    <div className="flex items-center justify-between lg:grid grid-cols-2 gap-5">
      <p className={clsx("font-semibold", theme === "default" && "text-black")}>
        Total <span className="hidden lg:inline">Pembayaran</span>
      </p>
      <div className="flex items-center space-x-2">
        <p
          className={clsx(
            "font-semibold",
            theme === "default" && "text-[#009F11]"
          )}
        >
          Rp{formatPrice(totalPayment)},-
        </p>
        <RiFileCopy2Line
          className={clsx("text-2xl", theme === "default" && "text-black")}
        />
      </div>
    </div>
  );
};

export default ItemFooter;
