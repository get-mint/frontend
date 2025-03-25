import Link from "next/link";
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Comparison } from '@/components/landing/Comparison';
import { Logo } from '@/components/landing/Logo';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Logo />
      <Hero />
      <Features />
      <Comparison />
    </main>
  );
}
