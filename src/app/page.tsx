import Link from "next/link";
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Comparison } from '@/components/landing/Comparison';
import { Logo } from '@/components/landing/Logo';
import { HowItWorks } from '@/components/landing/HowItWorks';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fbfbfd]">
      {/* Fixed navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#fbfbfd]/80 backdrop-blur-xl border-b border-gray-200/50">
        <Logo />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero section with full-height design */}
        <section className="relative min-h-screen">
          <Hero />
        </section>

        {/* How It Works with subtle background */}
        <section className="relative bg-white py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd] to-white" />
          <div className="relative">
            <HowItWorks />
          </div>
        </section>

        {/* Features with Apple-style cards */}
        <section className="relative bg-[#fbfbfd] py-32">
          <Features />
        </section>

        {/* Comparison with clean design */}
        <section className="relative bg-white py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd] to-white" />
          <div className="relative">
            <Comparison />
          </div>
        </section>
      </div>
    </main>
  );
}
