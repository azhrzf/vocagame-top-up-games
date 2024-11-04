import { ReactNode } from "react";

const ItemsBanner = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-5 p-6">
      <h4 className="text-2xl font-semibold font-['Space_Grotesk']">
        Pilih Produk
      </h4>
      {children}
    </div>
  );
};

export default ItemsBanner;
