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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="features" ref={containerRef} className="relative pb-48 pt-4 min-h-[800px] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #4CD964 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, #4CD964 1px, transparent 1px),
            radial-gradient(circle at 80% 60%, #4CD964 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 60px 60px, 40px 40px",
          y: backgroundY,
        }}
      />

      <motion.div
        style={{ y: contentY, opacity }}
        className="container relative z-10 mx-auto px-4"
      >
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Shopping that pays you back
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            No points to track. No coupons to clip. Just install the extension and start earning
            real cash on your everyday shopping.
          </motion.p>
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                <div className="relative space-y-3">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
