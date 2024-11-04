import { useState } from "react";

const useImageHandler = (initialSrc: string) => {
  const [imgSrc, setImgSrc] = useState(initialSrc);

  const handleImageError = () => {
    setImgSrc("/assets/images/backgrounds/thumb-1920-1319219.webp");
  };

  return { imgSrc, handleImageError };
};

export default useImageHandler;
