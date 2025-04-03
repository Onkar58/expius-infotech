"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui";
import { ChevronLeft, ChevronRight, Navigation } from "lucide-react";
import Image from "next/image";

const info = [
  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image: "/bg1.jpg",
  },

  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image: "/bg2.jpg",
  },
  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image: "/bg3.jpg",
  },
  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image: "/bg4.jpg",
  },
];

const NUM_BARS = 10; // Number of vertical bars

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % info.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % info.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + info.length) % info.length);
  };

  return (
    <div className="relative w-full h-[250px] md:h-[60vh] overflow-hidden">
      <Button
        className="absolute top-1/2 left-0 z-10 p-2 bg-black/20 text-white"
        variant="ghost"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </Button>
      <Button
        className="absolute top-1/2 right-0 z-10 p-2 bg-black/20 text-white"
        variant="ghost"
        onClick={nextSlide}
      >
        <ChevronRight />
      </Button>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }} // Exit in the opposite direction
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={info[index].image}
            alt="Image"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BlindsEffect({ src }: { src: string }) {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div className="relative w-full h-full flex">
      {
        //   Array.from({ length: NUM_BARS }).map((_, i) => {
        //       return (
        //           <motion.div
        //           key={i}
        //           className="absolute h-full"
        //           style={{
        //               width: `calc(100% / ${NUM_BARS})`,
        //               left: `calc(${(i * 100) / NUM_BARS}%)`,
        //               backgroundImage: `url(${src})`,
        //               backgroundSize: `${window.innerWidth}px auto`,
        //               backgroundPosition: `${(i * 100) / (NUM_BARS - 1)}% top`,
        //               backgroundRepeat: "no-repeat",
        //           }}
        //           initial={{ y: "100%" }}
        //           animate={{ y: "0%" }}
        //           exit={{ y: "-100%" }}
        //           transition={{ duration: 0.8, delay: i * 0.1, ease: "easeInOut" }} // Staggered effect
        //           />
        //       );
        //   })
      }
    </div>
  );
}
