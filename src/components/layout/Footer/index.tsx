import Link from "next/link";
import { siteMap, otherTopUp } from "@/data/footer-links";
import ScreenContainer from "../ScreenContainer";
import BrandLogo from "../BrandLogo";
import { Divider } from "antd";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <ScreenContainer className="mx-auto font-['Manrope'] md:font-['Space_Grotesk'] pt-10 pb-10 md:pb-4">
      <div className="md:grid grid-cols-12 gap-x-14 space-y-12 md:space-y-0 mb-10 justify-between pb-3">
        <div className="md:col-span-3 lg:col-span-5">
          <div className="flex items-center space-x-3">
            <BrandLogo color="white" size="lg" />
            <h2 className="font-bold uppercase">Nama Toko</h2>
          </div>
        </div>
        <div className="hidden md:block md:col-span-3 lg:col-span-2 space-y-3">
          <h3 className="font-bold text-sm uppercase">Peta Situs</h3>
          {siteMap.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="block text-[#949494]"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:block md:col-span-3 lg:col-span-2 space-y-3">
          <h3 className="font-bold text-sm uppercase">Top Up Lainnya</h3>
          {otherTopUp.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="block text-[#949494]"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-start space-x-10 md:space-x-0 md:block col-span-3">
          <div className="space-y-2">
            <h3 className="font-bold text-sm mb-3 uppercase">Ikuti Kami</h3>
            <div className="flex space-x-2 text-[#3E3E3E] md:text-[#EAEAEA]">
              <div className="bg-[#EAEAEA] md:bg-[#3E3E3E] p-3 rounded-full">
                <FaInstagram />
              </div>
              <div className="bg-[#EAEAEA] md:bg-[#3E3E3E] p-3 rounded-full">
                <FaTiktok />
              </div>
              <div className="bg-[#EAEAEA] md:bg-[#3E3E3E] p-3 rounded-full">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="md:mt-8 md:space-y-2">
            <h3 className="hidden md:block font-bold uppercase">Pertanyaan Bisnis</h3>
            <h3 className="block md:hidden font-bold uppercase">Kontak Kami</h3>
            <Link href="mailto:contact@email.id" className="block text-[#949494]">
              contact@email.id
            </Link>
          </div>
        </div>
      </div>
      <Divider
        className="hidden md:block border-[#EAEAEA] mb-3"
        style={{ borderWidth: "1.5px" }}
      />
      <div className="flex items-center justify-between text-[#949494]">
        <Link href="/" className="text-sm md:text-base">
          © PT BERMAIN BERSAMA INDONESIA, {new Date().getFullYear()}
        </Link>
        <Link href="https://azhrzf.my.id/" className="hidden md:block">Kebijakan Privasi</Link>
        <Link href="https://azhrzf.my.id/" className="hidden md:block">Terms of Service</Link>
        <Link href="https://azhrzf.my.id/" className="hidden md:block">Hubungi Kami</Link>
      </div>
    </ScreenContainer>
  );
};

export default Footer;
