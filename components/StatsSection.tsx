"use client";
import { FC } from "react";
import { Counter } from "./Counter";
import { motion } from "framer-motion";

export type StatsProps = {};

export const Stats: FC<StatsProps> = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            { number: 80, label: "Years of Experience" },
            { number: 1000, label: "Successful Placements" },
            { number: 200, label: "Client Companies" },
            { number: 15, label: "Industry Verticals" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-primary">
                <Counter number={stat.number} />+
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
