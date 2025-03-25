"use client";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Cash rewards',
    mint: true,
    others: false,
    description: 'Get real cash, not points or gift cards',
  },
  {
    feature: 'Student-focused',
    mint: true,
    others: false,
    description: 'Built specifically for student needs',
  },
  {
    feature: '50/50+ commission split',
    mint: true,
    others: false,
    description: 'We share at least half of every commission',
  },
  {
    feature: 'Instant payouts',
    mint: true,
    others: false,
    description: 'No waiting periods or minimum thresholds',
  },
  {
    feature: 'Transparent earnings',
    mint: true,
    others: false,
    description: 'See exactly how much you earn from each purchase',
  },
];

export function Comparison() {
  return (
    <section className="relative pt-24 pb-32 min-h-[800px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(76,217,100,0.1),rgba(255,255,255,0))]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Comparison
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why choose Mint?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
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
            className="mt-12 rounded-2xl bg-white shadow-xl border border-gray-100"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 gap-x-8 p-8 text-lg font-semibold text-gray-900 border-b border-gray-100">
              <div>Feature</div>
              <div className="text-center text-primary">Mint</div>
              <div className="text-center text-gray-400">Others</div>
            </div>

            {/* Table body */}
            <div className="divide-y divide-gray-100">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-3 gap-x-8 p-8 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <div className="font-medium text-gray-900">{item.feature}</div>
                    <div className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</div>
                  </div>
                  <div className="flex justify-center items-center">
                    {item.mint ? <Check className="h-6 w-6 text-primary" /> : <X className="h-6 w-6 text-gray-400" />}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.others ? <Check className="h-6 w-6 text-primary" /> : <X className="h-6 w-6 text-gray-400" />}
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
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Start Earning Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
