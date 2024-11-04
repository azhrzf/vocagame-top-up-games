import { RiSearch2Line } from "react-icons/ri";
import { ImPriceTag } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

const PromoSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex">
        <div className="relative w-full">
          <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
          <input
            type="text"
            placeholder="Ketik kode promo (optional)"
            className="bg-[#3D3D3D] py-4 pl-11 pr-3.5 rounded-l-lg w-full text-sm"
          />
        </div>
        <button className="rounded-r-lg bg-white px-6 py-3 text-[#3D3D3D] text-sm font-semibold">
          Gunakan
        </button>
      </div>
      <div className="cursor-pointer flex items-center justify-between p-5 rounded-lg border border-[#3E3E3E]">
        <div className="flex items-center space-x-5">
          <ImPriceTag className="text-xl -scale-x-90" />
          <p className="text-sm lg:text-base">Lihat promo tersedia</p>
        </div>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default PromoSection;
