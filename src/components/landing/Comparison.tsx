"use client";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Cash rewards',
    cashsplit: true,
    others: false,
    description: 'Get real cash, not points or gift cards',
  },
  {
    feature: 'Student-focused',
    cashsplit: true,
    others: false,
    description: 'Built specifically for student needs',
  },
  {
    feature: '50/50+ commission split',
    cashsplit: true,
    others: false,
    description: 'We share at least half of every commission',
  },
  {
    feature: 'Instant payouts',
    cashsplit: true,
    others: false,
    description: 'No waiting periods or minimum thresholds',
  },
  {
    feature: 'Transparent earnings',
    cashsplit: true,
    others: false,
    description: 'See exactly how much you earn from each purchase',
  },
];

export function Comparison() {
  return (
    <section className="relative min-h-screen bg-black py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-black" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-500">
              Comparison
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why choose CashSplit?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Traditional cashback and rewards programs keep most of the money for themselves.
              We believe in sharing the wealth with our users.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-3xl bg-primary-900/40 backdrop-blur-sm border border-primary-500/10"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 gap-x-8 p-8 text-lg font-semibold text-white border-b border-primary-500/10">
              <div>Feature</div>
              <div className="text-center text-primary-400">CashSplit</div>
              <div className="text-center text-gray-500">Others</div>
            </div>

            {/* Table body */}
            <div className="divide-y divide-primary-500/10">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-3 gap-x-8 p-8 hover:bg-primary-500/5 transition-colors"
                >
                  <div>
                    <div className="font-medium text-white">{item.feature}</div>
                    <div className="mt-1 text-sm text-gray-400">{item.description}</div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Check className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="flex justify-center items-center">
                    <X className="h-6 w-6 text-gray-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a
              href="#download"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary-500 text-black font-semibold hover:bg-primary-400 transition-colors"
            >
              Start Earning Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
