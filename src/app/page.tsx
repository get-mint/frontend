"use client";

import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Features } from "./features";
import { Comparison } from "./comparison";
import { Footer } from "./footer";
import { BrandsShowcase } from "./brands-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsShowcase />
      <HowItWorks />
      <Features />
      <Comparison />
      <Footer />
    </>
  );
}
