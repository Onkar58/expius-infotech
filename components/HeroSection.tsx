"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

export type HeroSectionProps = {};

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-background" />
      <div className="container relative z-10 py-20 md:py-28 lg:py-36">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Connecting the Right People with Right Opportunities
            </h1>
            <p className="text-lg md:text-xl">
              Full-service staffing and talent management solutions to help our
              clients fulfill their talent hunt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="text-primary underline-none hover:before:bg-orange relative overflow-hidden bg-white px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0  before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
                variant="link"
              >
                <Link href="/services" className="relative z-10">
                  Our Services
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="https://www.digimoksha.com/assets/people-services.png"
              alt="Talent Management"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
