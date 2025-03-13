"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg1.jpg",
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg2.jpg",
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg6.jpg",
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg3.jpg",
];

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Slide Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={slides[index]}
          alt="Slide"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bar Transition */}
      <div className="absolute inset-0 grid grid-cols-8">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full bg-black absolute"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 text-black font-bold rounded-md shadow-lg"
      >
        Next Slide
      </button>
    </div>
  );
};
