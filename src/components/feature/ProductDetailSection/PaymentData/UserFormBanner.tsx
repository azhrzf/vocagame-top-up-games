import { IoGameController } from "react-icons/io5";

const PaymentData = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-[#3D3D3D] rounded-xl">
        <IoGameController className="text-4xl text-[#949494]" />
      </div>
      <div className="space-y-1 font-['Space_Grotesk']">
        <h2 className="text-xl lg:text-3xl font-semibold">Topup Game</h2>
        <p className="text-[#949494] text-xs lg:text-lg">
          Lengkapi data dan dan dapatkan produk anda!
        </p>
      </div>
    </div>
  );
};

export default PaymentData;
