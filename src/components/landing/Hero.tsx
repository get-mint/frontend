"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Large gradient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl" />
        
        {/* Animated grid */}
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <motion.div
            className="absolute inset-0 grid grid-cols-8 gap-4 opacity-20"
            animate={{
              rotateX: [0, 10],
              rotateY: [0, 15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square bg-primary/20 rounded-lg"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            style={{ y: titleY, opacity }}
          >
            {/* Split text animation */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block"
                >
                  It's your money.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                >
                  We help you grab it.
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Turn shopping into cash — instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col items-center space-y-6"
            >
              {/* CTA Button with hover effect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200" />
                <button className="relative px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary/25">
                  Start Earning Now
                </button>
              </div>

              <p className="text-sm text-gray-500">
                Free to install • No credit card required
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="grid grid-cols-3 gap-12 pt-12 border-t border-gray-100"
              >
                {[
                  ["50%", "Commission Split"],
                  ["5000+", "Partner Stores"],
                  ["Instant", "Cash Out"],
                ].map(([value, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-500">{label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
