"use client";

import { useState, useEffect } from "react";
import { slides } from "@/data/slides";
import { Product } from "@/types/Product.types";
import { getProducts } from "@/data/products";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/feature/Carousel";
import DateCountdown from "@/components/feature/FlashSale/DateCountdown";
import FlashSaleCard from "@/components/feature/FlashSale/FlashSaleCard";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const OPTIONS: EmblaOptionsType = {};

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="font-['Poppins'] flex-grow flex flex-col bg-home-img h-full">
        <div className="bg-home-gardient flex-grow flex flex-col justify-between space-y-20 h-full">
          <div className="pt-20">
            <EmblaCarousel slides={slides} options={OPTIONS} />
          </div>
          <div className="bg-home-wave mb-auto pb-40">
            <div className="max-w-7xl mx-auto w-full space-y-8">
              <DateCountdown dateCountdown={new Date("2029-12-31")} />
              <div className="grid grid-cols-4 gap-5">
                {products.map((product) =>
                  product.items
                    .filter(
                      (item) =>
                        item.price > item.priceDiscount &&
                        item.priceDiscount > 0
                    )
                    .map((item) => (
                      <FlashSaleCard
                        key={`${product.id}-${item.id}`}
                        product={{
                          ...product,
                          item: item,
                        }}
                      />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-1 bg-[#1E1E1E] py-14">
        <div className="max-w-7xl mx-auto w-full">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            officia enim, quaerat veritatis obcaecati dignissimos fuga
            praesentium blanditiis magni nemo quia, labore laborum temporibus
            reprehenderit nobis inventore minus dolorum cupiditate.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
