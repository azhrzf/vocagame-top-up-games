import { MdOutlineSupportAgent } from "react-icons/md";

const CustomerService = () => {
  return (
    <div className="px-6 py-4 bg-[#282828] rounded-xl flex items-center space-x-2">
      <MdOutlineSupportAgent className="text-2xl"/>
      <p className="text-[#A1A1A1]">
        Butuh Bantuan?{" "}
        <span className="text-white font-semibold">Hubungi kami</span>
      </p>
    </div>
  );
};

export default CustomerService;
