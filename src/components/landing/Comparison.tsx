"use client";

import { motion } from "framer-motion";
import { Check, X } from 'lucide-react';

const features = [
  {
    name: "Instant Cash Back",
    mint: true,
    others: false,
  },
  {
    name: "No Minimum Payout",
    mint: true,
    others: false,
  },
  {
    name: "Automatic Detection",
    mint: true,
    others: false,
  },
  {
    name: "Universal Coverage",
    mint: true,
    others: false,
  },
  {
    name: "Real Cash (Not Points)",
    mint: true,
    others: false,
  },
  {
    name: "Zero Waiting Period",
    mint: true,
    others: false,
  },
];

export function Comparison() {
  return (
    <section className="relative py-32 bg-dark-400 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,224,143,0.05) 0%, rgba(0,224,143,0) 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            The Mint Difference
          </h2>
          <p className="text-xl text-gray-400">
            See how we compare to traditional cash back services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glowing border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-2xl blur-lg opacity-25" />
            
            {/* Main content */}
            <div className="relative bg-dark-500 rounded-xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-left text-lg font-medium text-gray-400">Features</div>
                <div className="text-center text-lg font-medium text-primary">Mint</div>
                <div className="text-center text-lg font-medium text-amber-500">Others</div>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 items-center group"
                  >
                    <div className="text-left text-gray-300 group-hover:text-white transition-colors">
                      {feature.name}
                    </div>
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 text-primary"
                      >
                        {feature.mint ? <Check size={24} /> : <X size={24} />}
                      </motion.div>
                    </div>
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 text-gray-400"
                      >
                        {feature.others ? <Check size={24} /> : <X size={24} />}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
