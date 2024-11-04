import { useState } from "react";

const useImageHandler = (initialSrc: string) => {
  const [imgSrc, setImgSrc] = useState(initialSrc);

  const handleImageError = () => {
    setImgSrc("/assets/images/backgrounds/bg-handler.webp");
  };

  return { imgSrc, handleImageError };
};

export default useImageHandler;
