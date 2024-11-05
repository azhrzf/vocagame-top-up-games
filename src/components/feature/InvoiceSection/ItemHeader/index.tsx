import { FaClipboardList } from "react-icons/fa6";
import { RiFileCopy2Line } from "react-icons/ri";

const ItemHeader = ({ id }: { id: string }) => {
  return (
    <div className="block lg:flex items-center justify-between space-y-6 lg:space-y-0">
      <div className="flex items-center space-x-4">
        <div className="bg-[#16C82A] rounded-2xl p-2">
          <FaClipboardList className="text-3xl" />
        </div>
        <div className="space-y-0.5">
          <p className="text-[#A1A1A1] text-sm">Nomor Pesanan</p>
          <div className="flex items-center space-x-1.5">
            <p className="font-semibold">{id}</p>
            <RiFileCopy2Line className="text-[#A1A1A1]" />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full lg:w-auto bg-[#16C82A] rounded-3xl px-4 py-2 text-sm font-semibold"
      >
        Pesanan Berhasil
      </button>
    </div>
  );
};

export default ItemHeader;
