import HomeHeader from "./HomeHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <HomeHeader />
      </div>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
