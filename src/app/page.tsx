import Link from "next/link";
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Comparison } from '@/components/landing/Comparison';
import { Logo } from '@/components/landing/Logo';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <Logo />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Diagonal sections with overlapping edges */}
        <section className="relative">
          <Hero />
        </section>

        <section className="relative -mt-32 pt-32 bg-gradient-to-br from-primary/5 to-white skew-y-3">
          <div className="-skew-y-3">
            <HowItWorks />
          </div>
        </section>

        <section className="relative -mt-32 pt-32 bg-gray-50 -skew-y-3">
          <div className="skew-y-3">
            <Features />
          </div>
        </section>

        <section className="relative -mt-32 pt-32 bg-white skew-y-3">
          <div className="-skew-y-3">
            <Comparison />
          </div>
        </section>
      </div>
    </main>
  );
}
