"use client";

import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Features } from "./features";
import { Comparison } from "./comparison";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <HowItWorks />
      </div>
      <div className="snap-start">
        <Features />
      </div>
      <div className="snap-start">
        <Comparison />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </main>
  );
}
