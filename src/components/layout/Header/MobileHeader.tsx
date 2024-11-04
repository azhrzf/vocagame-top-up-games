import ScreenContainer from "../ScreenContainer";
import BrandLogo from "../BrandLogo";
import { IoSearch, IoMenu } from "react-icons/io5";

const MobileHeader = () => {
  return (
    <section className="py-4 space-y-4 font-['Space_Grotesk']">
      <ScreenContainer className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BrandLogo color="purple" />
          <h1 className="font-bold">GameManiac</h1>
        </div>
        <div className="flex items-center space-x-4">
          <IoSearch />
          <IoMenu />
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MobileHeader;
