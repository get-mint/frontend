"use client";

import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Features } from "./features";
import { Comparison } from "./comparison";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="relative">
        <section className="relative min-h-screen">
          <Hero />
        </section>

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
    </main>
  );
}
