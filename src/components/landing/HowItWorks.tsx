"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Install Mint",
    description: "Add our extension to your browser in seconds. It's free and takes no setup.",
    highlight: "One-click install",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Shop as usual",
    description: "Continue shopping at your favorite stores. We'll automatically find the best deals.",
    highlight: "5000+ stores",
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Get paid",
    description: "Earn real cash back on every purchase. No points, no gift cards—just money.",
    highlight: "Instant payouts",
    color: "from-primary/40 to-primary/20",
  }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-24"
        >
          <h2 className="text-base font-semibold leading-7 text-primary mb-3">
            How It Works
          </h2>
          <p className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Three steps to start earning
          </p>
          <p className="text-xl text-gray-600">
            Getting cash back has never been easier
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Steps */}
          <div className="relative grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`
                  flex items-center gap-12 
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}>
                  {/* Number */}
                  <div className="relative flex-none">
                    <div className={`
                      w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color}
                      flex items-center justify-center transform rotate-12
                      group-hover:rotate-0 transition-transform duration-300
                    `}>
                      <span className="text-6xl font-bold text-primary/40">
                        {index + 1}
                      </span>
                    </div>
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                        <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                          {step.highlight}
                        </div>
                      </div>
                    </motion.div>

                    {/* Decorative gradient */}
                    <div className={`
                      absolute -inset-4 bg-gradient-to-r ${step.color}
                      rounded-2xl opacity-0 group-hover:opacity-100 -z-10
                      transition-opacity duration-300
                    `} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
