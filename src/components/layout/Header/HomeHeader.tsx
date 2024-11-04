import Link from "next/link";
import ScreenContainer from "../ScreenContainer";
import BrandLogo from "../BrandLogo";
import { Divider } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { ID } from "country-flag-icons/react/3x2";

const HomeHeader = () => {
  return (
    <section className="py-4 space-y-4 font-['Space_Grotesk']">
      <ScreenContainer className="mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BrandLogo color="white" />
          <h1 className="font-bold">GameManiac</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <IoSearch />
          <div className="space-x-4">
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
            <Divider type="vertical" className="border-[#3E3E3E] h-7" />
          </div>
          <div className="space-x-2 flex items-center">
            <ID title="Indonesia" className="h-3 rounded-sm" />
            <p>
              <span className="text-xs font-bold">ID</span>
              <span className="text-xs">-ID</span>
            </p>
          </div>
          <IoIosArrowDown />
        </div>
      </ScreenContainer>
      <Divider className="border-[#3E3E3E]" />
      <ScreenContainer className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <AiOutlineHome />
            <p className="text-sm">Beranda</p>
          </Link>
          <Link href="/track-order" className="flex items-center space-x-2">
            <IoIosSearch />
            <p className="text-sm">Lacak Pesanan</p>
          </Link>
        </div>
        <MdKeyboardDoubleArrowRight />
      </ScreenContainer>
    </section>
  );
};

export default HomeHeader;
