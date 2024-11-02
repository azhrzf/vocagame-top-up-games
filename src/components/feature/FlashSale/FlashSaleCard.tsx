"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ProductItem } from "../../../types/Product.types";

interface FlashSaleCardProps {
  product: ProductItem;
}

const FlashSaleCard = ({ product }: FlashSaleCardProps) => {
  const { item, image, name } = product;
  const [imgSrc, setImgSrc] = useState(image);

  const discountValid =
    item.price > item.priceDiscount && item.priceDiscount > 0;

  const discountPercentage = () => {
    if (discountValid) {
      return ((item.price - item.priceDiscount) / item.price) * 100;
    }

    return 0;
  };

  const handleImageError = () => {
    setImgSrc("/assets/images/backgrounds/thumb-1920-1319219.webp");
  };

  return (
    <div className="bg-[#1A1A1A] rounded-lg">
      <div className="p-5 space-x-3 bg-home-card-gardient rounded-lg flex items-center ">
        <Image
          className="w-14 h-14 rounded-xl"
          src={imgSrc}
          onError={handleImageError}
          alt="Product Image"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-[#A1A1A1] text-xs">{name}</p>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <button
          className="rounded-3xl bg-[#C72323] py-2 px-5 text-sm"
          type="button"
        >
          PROMO
        </button>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <p>
              <span className={clsx(discountValid && "line-through")}>
                Rp.{item.price}
              </span>
            </p>
            {discountValid && <p>Rp.{item.priceDiscount}</p>}
          </div>
          <p className="text-xs text-end">
            -{discountPercentage().toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
