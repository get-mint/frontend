import Link from "next/link";
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Comparison } from '@/components/landing/Comparison';
import { Logo } from '@/components/landing/Logo';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Logo />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="comparison">
        <Comparison />
      </div>
    </main>
  );
}
