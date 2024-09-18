"use client";
import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/image/bg1.jpg',
  '/image/bg2.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-[500px] w-[900px]">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform ease-in-out duration-500 w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              alt='image'
              key={index}
              src={src}
              className="w-full h-full h-auto object-cover"
              style={{ width: "100%" ,height:"100%" }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        ❯
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2 bg-black bg-opacity-50">
        {images.map((_, index) => (
          <button
            aria-label="search"
            type='button'
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;