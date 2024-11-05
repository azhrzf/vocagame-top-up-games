import { ImPriceTag } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

const PromoButton = () => {
  return (
    <div className="cursor-pointer flex items-center justify-between p-5 rounded-lg border border-[#3E3E3E]">
      <div className="flex items-center space-x-5">
        <ImPriceTag className="text-xl -scale-x-90" />
        <p className="text-sm lg:text-base">Lihat promo tersedia</p>
      </div>
      <IoIosArrowForward />
    </div>
  );
};

export default PromoButton;
