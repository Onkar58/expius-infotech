"use client";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type AboutUsProps = {};

export const AboutUs: FC<AboutUsProps> = () => {
  // Refs to track when elements are in view
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Detects if elements are in view
  const isImageInView = useInView(imageRef, { amount: 0.2 });
  const isTextInView = useInView(textRef, { amount: 0.2 });

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image with slide-in & slide-out animation */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D5612AQHIY1yzlo0LDg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711980639162?e=2147483647&v=beta&t=tTli_I8X-xJWzChCWzXVObIG1NS6wiyjS_BbOqh2-3g"
              alt="About Expius Infotech"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text content with slide-in & slide-out animation */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building Knowledge and Practice Through Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              Since inception, Expius Infotech's aim has been towards connecting
              the right people with the right opportunity. We offer full-service
              staffing and talent management solutions to help our clients
              fulfill their talent hunt.
            </p>
            <p className="text-lg text-muted-foreground">
              Our management team has 80+ Man Years of experience in Information
              Technology; having our DNA into IT staffing and human capital
              solutions.
            </p>
            <Button asChild>
              <Link href="/about" className="inline-flex items-center">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
