"use client";

import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Features } from "./features";
import { Comparison } from "./comparison";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Comparison />
    </>
  );
}
