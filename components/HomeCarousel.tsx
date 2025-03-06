"use client";
import { Navigation } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg1.jpg",
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg2.jpg",
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg6.jpg",
  "https://expiusinfotech.com/images/sliders/revolution/slider-bg3.jpg",
];

const transitions = [
  { x: "100%", opacity: 0 }, // Slide in from right
  { x: "-100%", opacity: 0 }, // Slide in from left
  { scale: 0.8, opacity: 0 }, // Zoom in
  { rotate: 90, opacity: 0 }, // Rotate
  { y: "100%", opacity: 0 }, // Slide in from bottom
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [transitionType, setTransitionType] = useState(transitions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitionType(
        transitions[Math.floor(Math.random() * transitions.length)],
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={i} className="relative">
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute top-1/3 -translate-y-1/2 left-5 lg:left-[10%] text-white text-center md:text-left px-4 flex item-start flex-col gap-2 md:gap-4">
              <h1 className="p-2 bg-black/60 font-bold text-2xl md:text-4xl w-fit rounded-md">
                PERMANENT STAFFING
              </h1>
              <p className="p-2 py-1 bg-black/60 w-fit rounded-md text-sm md:text-base">
                Expius provides talented, experienced, highly motivated
                candidates for positions with clients across diverse industries.
              </p>
              <Button
                className="h-12 border border-white bg-black/60 w-fit rounded-md text-white font-light text-sm md:text-lg"
                variant="link"
              >
                <Navigation className="mr-2 md:mr-4" /> LEARN MORE
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
