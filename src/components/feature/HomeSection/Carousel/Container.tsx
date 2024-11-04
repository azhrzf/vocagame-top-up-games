import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  options?: EmblaOptionsType;
  children: React.ReactNode;
};

const EmblaCarouselContainer: React.FC<PropType> = ({ options, children }) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla__xtra">
      <div className="embla__xtra__viewport" ref={emblaRef}>
        {children}
      </div>
    </section>
  );
};

export default EmblaCarouselContainer;
