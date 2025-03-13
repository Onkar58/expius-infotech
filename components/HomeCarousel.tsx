"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui";
import { ChevronLeft, ChevronRight, Navigation } from "lucide-react";

const info = [
  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image:
      "https://covenantindia.net/wp-content/uploads/2024/09/permanent-staffing-company-in-india.webp",
  },

  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image:
      "https://www.betterplace.co.in/blog/wp-content/uploads/2021/03/60.jpg",
  },
  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image:
      "https://www.weareams.com/wp-content/uploads/guide-to-recruitment-process-outsourcing-why-hire-rpo.png",
  },
  {
    heading: "PERMANENT STAFFING",
    sub: "Expius provides talented, experienced, highly motivated candidatesfor positions with clients across diverse industries.",
    link: "/",
    image:
      "https://www.weareams.com/wp-content/uploads/guide-to-recruitment-process-outsourcing-definition.png",
  },
];

const NUM_BARS = 10; // Number of vertical bars

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % info.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [index]);
  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % info.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : info.length - 1));
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[60vh] overflow-hidden">
      <Button
        className="absolute top-1/2 left-0 z-10 p-2  bg-black/20 text-white"
        variant="ghost"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </Button>
      <Button
        className="absolute top-1/2 right-0 z-10 p-2  bg-black/20 text-white"
        variant="ghost"
        onClick={nextSlide}
      >
        <ChevronRight />
      </Button>

      <AnimatePresence mode="wait">
        <BlindsEffect key={index} src={info[index].image} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute top-1/2 md:top-1/3 -translate-y-1/2 left-5 lg:left-[10%] text-white text-center md:text-left px-4 flex item-start flex-col gap-2 md:gap-4 scale-[0.8] md:scale-[1]"
        >
          <h1 className="p-2 bg-black/60 font-bold text-2xl md:text-4xl w-fit rounded-md">
            {info[index].heading}
          </h1>
          <p className="p-2 py-1 bg-black/60 w-fit rounded-md text-sm md:text-base">
            {info[index].sub}
          </p>
          <Button
            className="h-12 border border-white bg-black/60 w-fit rounded-md text-white font-light text-sm md:text-lg"
            variant="link"
          >
            <Navigation className="mr-2 md:mr-4" /> LEARN MORE
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Blinds Effect Component
function BlindsEffect({ src }: { src: string }) {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div className="relative w-full h-full flex">
      {Array.from({ length: NUM_BARS }).map((_, i) => {
        return (
          <motion.div
            key={i}
            className="absolute h-full"
            style={{
              width: `calc(100% / ${NUM_BARS})`,
              left: `calc(${(i * 100) / NUM_BARS}%)`,
              backgroundImage: `url(${src})`,
              backgroundSize: `${window.innerWidth}px auto`,
              backgroundPosition: `${(i * 100) / (NUM_BARS - 1)}% top`,
              backgroundRepeat: "no-repeat",
            }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeInOut" }} // Staggered effect
          />
        );
      })}
    </div>
  );
}
