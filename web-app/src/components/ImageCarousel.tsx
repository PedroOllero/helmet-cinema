import { useEffect, useState } from "react";

const images = [
  "/src/assets/wicked.jpeg",
  "/src/assets/dune.jpg",
  "/src/assets/avengers.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="h-90 lg:h-95 lg:w-full md:h-95 md:w-full object-cover"
      />

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-red-600 transition-all duration-300 ease-in-out"
      >
        ◀
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-red-600 transition-all duration-300 ease-in-out"
      >
        ▶
      </button>
    </div>
  );
};

export default ImageCarousel;