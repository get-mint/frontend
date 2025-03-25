import Link from "next/link";
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Comparison } from '@/components/landing/Comparison';
import { Logo } from '@/components/landing/Logo';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Logo />
      <section className="space-y-0">
        <div id="hero">
          <Hero />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="comparison">
          <Comparison />
        </div>
      </section>
    </main>
  );
}
