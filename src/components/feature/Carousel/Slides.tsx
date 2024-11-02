import Image from "next/image";
import { useDotButtonCarouselType } from "@/hooks/useDotButtonCarousel";

interface Slide {
  id: number;
  title: string;
  description: string;
  img: string;
}

type SlidesProps = {
  slide: Slide;
  currentIndex: boolean;
} & useDotButtonCarouselType;

const Slides = ({
  slide,
  selectedIndex,
  currentIndex,
  scrollSnaps,
  onDotButtonClick,
}: SlidesProps) => {
  return (
    <>
      <Image
        className="flex-grow rounded-xl h-[25rem] 4xl:h-full object-cover object-top w-full"
        src={`/assets/images/slides/${slide.img}`}
        alt="Your alt text"
      />
      {currentIndex && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-2">
          {scrollSnaps.map((_, snapIndex) => (
            <button
              key={snapIndex}
              type="button"
              onClick={() => onDotButtonClick(snapIndex)}
              className="py-4"
            >
              <div
                className={`dot h-1.5 w-14 rounded-sm ${
                  snapIndex === selectedIndex ? "bg-selected" : ""
                }`}
              ></div>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Slides;
