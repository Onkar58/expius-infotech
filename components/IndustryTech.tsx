"use client";
import { Building, CheckCircle, ChevronRight, Code } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

export type IndustryTechProps = {};

export const IndustryTech: FC<IndustryTechProps> = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Industry Practice
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Specialized Across Multiple Sectors
          </h2>
          <p className="text-lg text-muted-foreground">
            Being a diversified staffing solution provider, we operate in a
            number of sectors and market segments.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: <Building className="h-6 w-6 text-primary" />,
              title: "Industry Verticals",
              description:
                "We serve diverse industry verticals including IT, Finance, Healthcare, Manufacturing, and more with specialized recruitment expertise.",
              items: [
                "Information Technology",
                "Banking & Finance",
                "Healthcare & Pharma",
              ],
              link: "/industry-practice/verticals",
            },
            {
              icon: <Code className="h-6 w-6 text-primary" />,
              title: "Technologies",
              description:
                "Our expertise spans across various technologies, enabling us to find the right talent for your specific technical requirements.",
              items: [
                "Web & Mobile Development",
                "Cloud & DevOps",
                "Data Science & AI",
              ],
              link: "/industry-practice/technologies",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {card.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
              <p className="mb-4 text-muted-foreground">{card.description}</p>
              <ul className="mb-4 space-y-2">
                {card.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href={card.link}
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                View All {card.title} <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
