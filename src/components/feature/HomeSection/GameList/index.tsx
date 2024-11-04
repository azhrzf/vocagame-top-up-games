"use client";

import { useState } from "react";
import { Product } from "@/types/Product.types";
import clsx from "clsx";
import GameListCard from "./GameListCard";

const categories = [
  {
    id: 1,
    name: "Rekomendasi",
    slug: "REKOMENDASI",
  },
  {
    id: 2,
    name: "Mobile Game",
    slug: "MOBILE",
  },
  {
    id: 3,
    name: "PC Game",
    slug: "PC",
  },
];

interface GameListProps {
  products: Product[];
}

const GameList = ({ products }: GameListProps) => {
  const [currentCategory, setCurrentCategory] = useState("REKOMENDASI");

  return (
    <>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold font-['Space_Grotesk']">
        Temukan Game Favorit
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-1 font-['Manrope'] mb-5 lg:mb-0 flex lg:block justify-between space-x-1 lg:space-x-0 lg:space-y-4">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                type="button"
                className={clsx(
                  "transition ease-in-out duration-500 py-2 px-2 lg:px-6 lg:py-3 rounded-lg w-full text-sm lg:text-base text-center lg:text-start",
                  category.slug === currentCategory ? "font-semibold bg-white text-black" : "text-[#949494]"
                )}
                onClick={() => setCurrentCategory(category.slug)}
              >
                {category.name}
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products
              .filter((product) => {
                const all = currentCategory === "REKOMENDASI";
                return all || product.category === currentCategory;
              })
              .map((product) => {
                return <GameListCard key={product.id} {...product} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameList;
