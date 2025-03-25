"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    name: "Instant Cash Back",
    description: "Get your money instantly. No waiting periods, no minimum thresholds. Your cash is ready when you are.",
    metric: "50%",
    metricLabel: "commission split",
    gradient: "from-primary to-primary/60",
  },
  {
    name: "Shop Anywhere",
    description: "Works with thousands of online stores, from big retailers to boutique shops. If you can shop there, you can earn there.",
    metric: "5000+",
    metricLabel: "partner stores",
    gradient: "from-primary to-primary/60",
  },
  {
    name: "Zero Hassle",
    description: "No codes to enter, no receipts to upload. Our extension automatically applies the best available cashback rate.",
    metric: "100%",
    metricLabel: "automated",
    gradient: "from-primary to-primary/60",
  },
  {
    name: "Real Money",
    description: "No points systems, no gift cards. Get paid in real cash through PayPal, Venmo, or direct deposit.",
    metric: "$$$",
    metricLabel: "real cash",
    gradient: "from-primary to-primary/60",
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with consistent typography */}
        <motion.div
          style={{ y }}
          className="max-w-[980px] mx-auto text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Every feature is crafted to make earning cash back effortless.
          </motion.p>
        </motion.div>

        {/* Features grid with Mint colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1072px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with Mint gradient */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Metric with Mint colors */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {feature.metric}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {feature.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Mint style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <a
            href="#"
            className="inline-flex items-center text-lg text-primary hover:text-primary/80 transition-colors"
          >
            <span>Learn more about Mint features</span>
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
