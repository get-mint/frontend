"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, DollarSign, Coins, CreditCard, ShoppingBag } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useRef } from 'react';

interface FloatingIconProps {
  icon: LucideIcon;
  x: number;
  y: number;
  delay: number;
  scale?: number;
}

const FloatingIcon = ({ icon: Icon, x, y, delay, scale = 1 }: FloatingIconProps) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [-5, 5, -5],
        scale: [1, scale * 1.1, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Icon className="text-primary/40" style={{ width: 24 * scale, height: 24 * scale }} />
    </motion.div>
  );
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Define multiple instances of each icon type with different positions and scales
  const floatingElements = [
    // Dollar signs
    { icon: DollarSign, x: 15, y: 20, delay: 0, scale: 1.5 },
    { icon: DollarSign, x: 85, y: 30, delay: 0.5, scale: 1.2 },
    { icon: DollarSign, x: 25, y: 70, delay: 1, scale: 1 },
    { icon: DollarSign, x: 75, y: 60, delay: 1.5, scale: 1.3 },
    
    // Coins
    { icon: Coins, x: 20, y: 40, delay: 0.2, scale: 1.4 },
    { icon: Coins, x: 80, y: 25, delay: 0.7, scale: 1.1 },
    { icon: Coins, x: 30, y: 65, delay: 1.2, scale: 1.2 },
    { icon: Coins, x: 70, y: 75, delay: 1.7, scale: 1 },
    
    // Credit cards
    { icon: CreditCard, x: 25, y: 25, delay: 0.4, scale: 1.3 },
    { icon: CreditCard, x: 75, y: 35, delay: 0.9, scale: 1.2 },
    { icon: CreditCard, x: 35, y: 75, delay: 1.4, scale: 1.1 },
    { icon: CreditCard, x: 65, y: 65, delay: 1.9, scale: 1 },
    
    // Shopping bags
    { icon: ShoppingBag, x: 30, y: 30, delay: 0.3, scale: 1.2 },
    { icon: ShoppingBag, x: 70, y: 40, delay: 0.8, scale: 1.4 },
    { icon: ShoppingBag, x: 40, y: 70, delay: 1.3, scale: 1.1 },
    { icon: ShoppingBag, x: 60, y: 80, delay: 1.8, scale: 1.3 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-mint-light/10 to-primary/10">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Floating icons */}
        {floatingElements.map((props, index) => (
          <FloatingIcon key={index} {...props} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Start earning with <span className="text-primary">Mint</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of smart shoppers who earn cash back on every purchase.
            With Mint, you get the best deals and real cash rewards.
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Mint is the browser extension that pays you real money every time you shop online. 
            We split the commission 50/50 — no points, no gift cards, just straight-up cash to your wallet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-600 text-white font-semibold px-8 h-14 rounded-full group transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Mint Extension — Get Paid to Shop
            </Button>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            {[
              { value: "50%", label: "Commission Split" },
              { value: "Instant", label: "Cash Payouts" },
              { value: "1000+", label: "Partner Stores" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
