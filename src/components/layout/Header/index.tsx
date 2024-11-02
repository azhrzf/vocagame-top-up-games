import { Divider } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { ID } from "country-flag-icons/react/3x2";

const Header = () => {
  return (
    <section className="py-4 space-y-4 font-['Space_Grotesk']">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="grid grid-cols-3 w-12">
            <div className="w-8 h-8 bg-[#FFFFFF] rounded-full opacity-10"></div>
            <div className="w-8 h-8 bg-[#FFFFFF] rounded-full opacity-10"></div>
          </div>
          <h1 className="font-bold">GameManiac</h1>
        </div>
        <div className="flex items-center space-x-4">
          <IoSearch />
          <div className="space-x-4">
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
          </div>
          <div className="space-x-2 flex items-center font-['Poppins']">
            <ID title="Indonesia" className="h-3 rounded-sm" />
            <p>
              <span className="text-xs font-bold">ID</span>
              <span className="text-xs">-ID</span>
            </p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
      <Divider className="border-[#3E3E3E]" />
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <AiOutlineHome />
            <a className="text-sm">Beranda</a>
          </div>
          <div className="flex items-center space-x-2">
            <IoIosSearch />
            <a className="text-sm">Lacak Pesanan</a>
          </div>
        </div>
        <MdKeyboardDoubleArrowRight />
      </div>
    </section>
  );
}

export default Header;