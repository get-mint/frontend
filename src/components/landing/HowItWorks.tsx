"use client";

import { Download, ShoppingBag, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Download,
    title: "Install Mint",
    description: "Download our browser extension in seconds",
  },
  {
    icon: ShoppingBag,
    title: "Shop anywhere",
    description: "Continue shopping at your favorite stores",
  },
  {
    icon: DollarSign,
    title: "Get cash",
    description: "Earn real cash back on every purchase",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start earning in three easy steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                  >
                    <step.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
