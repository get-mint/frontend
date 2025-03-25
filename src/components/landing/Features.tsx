"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, Wallet, ArrowUpRight, Gift, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    name: 'Shop Anywhere',
    description: 'Works with major brands like Nike, Sephora, Uber Eats, and hundreds more.',
    icon: ShoppingBag,
  },
  {
    name: 'Instant Cash',
    description: 'Get paid directly to your Venmo, CashApp, or PayPal. No gift cards, no points.',
    icon: Wallet,
  },
  {
    name: '50/50 Split',
    description: 'We split the commission with you — guaranteed minimum 50% on every purchase.',
    icon: ArrowUpRight,
  },
  {
    name: 'Better Than Cashback',
    description: 'Higher rates than traditional cashback sites, with instant payouts.',
    icon: Gift,
  },
  {
    name: 'Zero Risk',
    description: 'Your data is secure and encrypted. We never see your payment information.',
    icon: ShieldCheck,
  },
  {
    name: 'Set & Forget',
    description: 'Install once and earn forever. No need to activate deals or remember codes.',
    icon: Zap,
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at center, #00D6A3 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y,
        }}
      />

      <motion.div
        style={{ opacity }}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base font-semibold leading-7 text-primary-500"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Everything you need, nothing you don't
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            No points to track. No coupons to clip. Just install the extension and start earning real cash on your everyday shopping.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-primary-900/40 rounded-2xl backdrop-blur-sm border border-primary-500/10 group hover:bg-primary-900/60 transition-colors"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                <div className="relative">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.name}</h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
