"use client";

import { useProductsStore } from "@/stores/useProductsStore";
import { slides } from "@/data/slides";
import { EmblaOptionsType } from "embla-carousel";
import ScreenContainer from "@/components/layout/ScreenContainer";
import GameList from "@/components/feature/HomeSection/GameList";
import EmblaCarousel from "@/components/feature/HomeSection/Carousel";
import FlashSale from "@/components/feature/HomeSection/FlashSale";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const HomePage = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <>
      <div className="flex-grow flex flex-col bg-home-img h-full">
        <div className="bg-home-gardient flex-grow flex flex-col justify-between space-y-20 h-full">
          <div className="pt-16">
            <EmblaCarousel slides={slides} options={OPTIONS} />
          </div>
          <div className="bg-home-wave mb-auto pb-40 space-y-10">
            <FlashSale
              products={products}
              dateCountdown={new Date("2025-12-31T23:59:59")}
            />
          </div>
        </div>
      </div>
      <div className="-mt-1 bg-[#1E1E1E] py-14">
        <ScreenContainer className="mx-auto w-full space-y-8">
          <GameList products={products} />
        </ScreenContainer>
      </div>
    </>
  );
};

export default HomePage;
