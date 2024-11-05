import { MdGpsFixed } from "react-icons/md";

const Banner = () => {
  return (
    <div className="flex items-center p-5 lg:px-10 lg:py-12 space-x-5 bg-track-order-banner-img">
      <div className="p-2 lg:p-6 bg-[#E9E9E9] rounded-2xl">
        <MdGpsFixed className="text-4xl text-black" />
      </div>
      <div className="space-y-2">
        <div className="text-black font-semibold w-min text-xs lg:text-sm bg-[#E9E9E9] px-2 py-1 rounded-xl">
          <p>GameManiac.com</p>
        </div>
        <h2 className="text-xl lg:text-[2.5rem] leading-none font-semibold text-black">
          Lacak Pesanan
        </h2>
      </div>
    </div>
  );
};

export default Banner;
