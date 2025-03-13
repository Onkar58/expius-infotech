"use client";
import { FC } from "react";
import CountUp from "react-countup";

export type CounterProps = { number: number; duration?: number };

export const Counter: FC<CounterProps> = ({ number, duration }) => {
  return <CountUp duration={duration ?? 5} end={number} />;
};
