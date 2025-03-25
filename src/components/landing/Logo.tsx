"use client";

import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

export function Logo() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-primary-500/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white">CashSplit</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-primary-100/80 hover:text-primary-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-primary-100/80 hover:text-primary-400 transition-colors">
              How it Works
            </a>
            <a href="#comparison" className="text-sm text-primary-100/80 hover:text-primary-400 transition-colors">
              Compare
            </a>
            <a
              href="#download"
              className="inline-flex h-8 items-center rounded-full bg-primary-500 px-4 text-sm font-medium text-black hover:bg-primary-400 transition-colors"
            >
              Download Now
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
