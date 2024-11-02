"use client";

import Slides from "./Slides";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { useDotButtonCarousel } from "@/hooks/useDotButtonCarousel";
import "@/styles/feature/carousel.css";

interface Slide {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface CarouselProps {
  slides: Slide[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);
  const { width: currentWidth } = useWindowDimensions();

  const currentPadding = () => {
    if (currentWidth >= 1280 && currentWidth <= 1920) {
      return (currentWidth - 1280) / 2;
    }
    return 0;
  };

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButtonCarousel(emblaApi);

  const setMargin = (index: number, currentPadding: number) => {
    return {
      marginLeft: index === 0 ? `${currentPadding - 10}px` : "1.75rem",
      marginRight:
        index === slides.length - 1 ? `${currentPadding - 15}px` : "1.75rem",
    };
  };

  return (
    <section className="embla overflow-hidden space-y-5 w-full">
      <div className="min-h-[25rem] overflow-hidden" ref={emblaRef}>
        <div className="flex items-center touch-pan-y touch-pinch-zoom space-x-7 h-full">
          {slides.map((slide, index) => {
            const currentMargin = setMargin(index, currentPadding());
            return (
              <div
                key={slide.id}
                style={currentMargin}
                className="embla__slide 4xl:h-full"
              >
                <Slides
                  slide={slide}
                  currentIndex={index === selectedIndex}
                  selectedIndex={selectedIndex}
                  scrollSnaps={scrollSnaps}
                  onDotButtonClick={onDotButtonClick}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-3">
        <h2 className="text-3xl font-semibold">
          {slides[selectedIndex].title}
        </h2>
        <p className="text-lg">{slides[selectedIndex].description}</p>
      </div>
    </section>
  );
};

export default EmblaCarousel;
