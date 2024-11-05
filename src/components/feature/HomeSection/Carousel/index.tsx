import ScreenContainer from "@/components/layout/ScreenContainer";
import Slides from "./Slides";
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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButtonCarousel(emblaApi);

  return (
    <section className="embla overflow-hidden space-y-5 w-full">
      <div className="min-h-60 lg:min-h-[25rem] overflow-hidden" ref={emblaRef}>
        <div className="px-6 lg:px-0 flex items-center touch-pan-y touch-pinch-zoom h-full">
          {slides.map((slide, index) => {
            return (
              <ScreenContainer
                className="embla__slide mr-7 h-60 lg:h-[27rem]"
                key={slide.id}
              >
                <Slides
                  slide={slide}
                  currentIndex={index === selectedIndex}
                  selectedIndex={selectedIndex}
                  scrollSnaps={scrollSnaps}
                  onDotButtonClick={onDotButtonClick}
                />
              </ScreenContainer>
            );
          })}
        </div>
      </div>
      <ScreenContainer className="mx-auto space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {slides[selectedIndex].title}
        </h2>
        <p className="text-lg">{slides[selectedIndex].description}</p>
      </ScreenContainer>
    </section>
  );
};

export default EmblaCarousel;
