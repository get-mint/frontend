"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    name: "Instant Cash Back",
    description: "Get your money instantly. No waiting periods, no minimum thresholds. Your cash is ready when you are.",
    metric: "50%",
    metricLabel: "commission split",
  },
  {
    name: "Shop Anywhere",
    description: "Works with thousands of online stores, from big retailers to boutique shops. If you can shop there, you can earn there.",
    metric: "5000+",
    metricLabel: "partner stores",
  },
  {
    name: "Zero Hassle",
    description: "No codes to enter, no receipts to upload. Our extension automatically applies the best available cashback rate.",
    metric: "100%",
    metricLabel: "automated",
  },
  {
    name: "Real Money",
    description: "No points systems, no gift cards. Get paid in real cash through PayPal, Venmo, or direct deposit.",
    metric: "$$$",
    metricLabel: "real cash",
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4CD96420_1px,transparent_1px),linear-gradient(to_bottom,#4CD96420_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div style={{ y }} className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full px-4 py-1 text-primary bg-primary/10 text-sm font-medium mb-4">
                Features
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Everything you need to maximize your earnings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Simple, powerful features that help you earn more with every purchase
            </motion.p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl">
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Metric */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-primary">
                          {feature.metric}
                        </span>
                        <span className="text-gray-500">
                          {feature.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
