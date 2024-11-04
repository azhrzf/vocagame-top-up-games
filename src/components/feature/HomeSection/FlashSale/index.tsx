import ScreenContainer from "@/components/layout/ScreenContainer";
import { Product } from "@/types/Product.types";
import EmblaCarouselContainer from "../Carousel/Container";
import DateCountdown from "./DateCountdown";
import FlashSaleCard from "./FlashSaleCard";
import "@/styles/feature/carousel-container.css";

interface FlashSaleProps {
  products: Product[];
  dateCountdown: Date;
}

const FlashSale = ({ products, dateCountdown }: FlashSaleProps) => {
  return (
    <>
      <ScreenContainer className="mx-auto w-full space-y-8">
        <DateCountdown dateCountdown={dateCountdown} />
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) =>
            product.items
              .filter(
                (item) =>
                  item.price > item.priceDiscount && item.priceDiscount > 0
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
      </ScreenContainer>
      <div className="md:hidden">
        <EmblaCarouselContainer>
          <div className="embla__xtra__container">
            {products.map((product) =>
              product.items
                .filter(
                  (item) =>
                    item.price > item.priceDiscount && item.priceDiscount > 0
                )
                .map((item) => (
                  <div
                    key={`${product.id}-${item.id}`}
                    className="embla__xtra__slide"
                  >
                    <FlashSaleCard
                      product={{
                        ...product,
                        item: item,
                      }}
                    />
                  </div>
                ))
            )}
          </div>
        </EmblaCarouselContainer>
      </div>
    </>
  );
};

export default FlashSale;
