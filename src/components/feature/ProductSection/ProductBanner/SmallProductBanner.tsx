"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Product } from "@/types/Product.types";
import Skeleton from "react-loading-skeleton";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";

interface SmallProductBannerProps {
  product: Product | null;
}

const SmallProductBanner = ({ product }: SmallProductBannerProps) => {
  const [imgSrc, setImgSrc] = useState(
    "/assets/images/backgrounds/bg-handler.webp"
  );

  useEffect(() => {
    if (product) {
      setImgSrc(product.image);
    }
  }, [product]);

  const handleImageError = () => {
    setImgSrc("/assets/images/backgrounds/bg-handler.webp");
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-3">
      {product ? (
        <Image
          className="rounded-2xl"
          src={imgSrc}
          onError={handleImageError}
          alt={product.name}
          width={225}
          height={225}
        />
      ) : (
        <div className="w-48 h-48">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      {product ? (
        <p className="text-xs px-3 py-1 bg-[#EAEAEA] font-semibold rounded-3xl">
          GameManiac.com
        </p>
      ) : (
        <Skeleton width={138} height={20} />
      )}
      <div className="flex flex-col space-y-1">
        {product ? (
          <h3 className="text-center text-xl font-bold font-['Plus_Jakarta_Sans']">
            {product.name}
          </h3>
        ) : (
          <Skeleton height={23} width={300} />
        )}
        {product ? (
          <p className="text-xs text-center text-[#949494] ">
            {product.publisher}
          </p>
        ) : (
          <div className="mx-auto">
            <Skeleton width={100} />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center space-x-4 text-[0.65rem] font-semibold">
        {product ? (
          <>
            <div className="flex items-center justify-center space-x-1.5 px-1.5 py-1 bg-[#EAEAEA] rounded-3xl">
              <RiCustomerServiceFill />
              <p>Customer Service 24/7</p>
            </div>
            <div className="flex items-center justify-center space-x-1.5 px-1.5 py-1 bg-[#EAEAEA] rounded-3xl">
              <MdVerifiedUser />
              <p>Official Distributor</p>
            </div>
          </>
        ) : (
          <>
            <Skeleton width={150} height={20} />
            <Skeleton width={150} height={20} />
          </>
        )}
      </div>
    </div>
  );
};

export default SmallProductBanner;
