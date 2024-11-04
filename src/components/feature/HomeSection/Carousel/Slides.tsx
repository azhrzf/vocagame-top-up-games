import Image from "next/image";
import { useDotButtonCarouselType } from "@/hooks/useDotButtonCarousel";
import clsx from "clsx";

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
        className="rounded-xl object-cover object-top w-full overflow-hidden"
        src={`/assets/images/slides/${slide.img}`}
        alt="Your alt text"
        fill={true}
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
                className={clsx(
                  "dot h-1.5 w-10 lg:w-14 rounded-sm",
                  snapIndex === selectedIndex && "bg-selected"
                )}
              ></div>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Slides;
