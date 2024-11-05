import Link from "next/link";
import ScreenContainer from "../ScreenContainer";
import BrandLogo from "../BrandLogo";
import SiteMapSection from "./SiteMapSection";
import OtherTopUpSection from "./OtherTopUpSection";
import SocialMediaSection from "./SocialMediaSection";
import BelowFooter from "./BelowFooter";
import { Divider } from "antd";

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
          <SiteMapSection />
        </div>
        <div className="hidden md:block md:col-span-3 lg:col-span-2 space-y-3">
          <h3 className="font-bold text-sm uppercase">Top Up Lainnya</h3>
          <OtherTopUpSection />
        </div>
        <div className="flex items-start space-x-10 md:space-x-0 md:block col-span-3">
          <div className="space-y-2">
            <h3 className="font-bold text-sm mb-3 uppercase">Ikuti Kami</h3>
            <SocialMediaSection />
          </div>
          <div className="md:mt-8 md:space-y-2">
            <h3 className="hidden md:block font-bold uppercase">
              Pertanyaan Bisnis
            </h3>
            <h3 className="block md:hidden font-bold uppercase">Kontak Kami</h3>
            <Link
              href="mailto:contact@email.id"
              className="block text-[#949494]"
            >
              contact@email.id
            </Link>
          </div>
        </div>
      </div>
      <Divider
        className="hidden md:block border-[#EAEAEA] mb-3"
        style={{ borderWidth: "1.5px" }}
      />
      <BelowFooter />
    </ScreenContainer>
  );
};

export default Footer;
