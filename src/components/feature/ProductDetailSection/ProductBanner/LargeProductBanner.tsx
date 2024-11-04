"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Product } from "@/types/Product.types";
import Skeleton from "react-loading-skeleton";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";

interface LargeProductBannerProps {
  product: Product | null;
}

const LargeProductBanner = ({ product }: LargeProductBannerProps) => {
  const [imgSrc, setImgSrc] = useState("/assets/images/backgrounds/bg-handler.webp");

  useEffect(() => {
    if (product) {
      setImgSrc(product.image);
    }
  }, [product]);

  if (!product) {
    return <Skeleton className="w-full h-full" />;
  }

  const { name, publisher } = product;

  const handleImageError = () => {
    setImgSrc("/assets/images/backgrounds/bg-handler.webp");
  };

  return (
    <div className="w-full px-9 py-7 bg-product-detail-main-bottom ">
      <div className="flex items-center space-x-7">
        <Image
          width={128}
          height={128}
          className="rounded-2xl"
          src={imgSrc}
          onError={handleImageError}
          alt={name}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans']">
            {name}
          </h3>
          <p className="text-xl">{publisher}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-product-detail-main-bottom-item rounded-3xl">
              <RiCustomerServiceFill className="text-lg" />
              <p className="text-sm">Customer Service 24/7</p>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-product-detail-main-bottom-item rounded-3xl">
              <MdVerifiedUser className="text-lg" />
              <p className="text-sm">Official Distributor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeProductBanner;
