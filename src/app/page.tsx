"use client";

import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Features } from "./features";
import { Comparison } from "./comparison";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative">
        <section className="relative bg-card py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative">
            <HowItWorks />
          </div>
        </section>

        <section className="relative bg-background py-32">
          <Features />
        </section>

        <section className="relative bg-card py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative">
            <Comparison />
          </div>
        </section>
      </div>
    </>
  );
}
