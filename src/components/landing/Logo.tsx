"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 px-6"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Mint</span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="#features" className="text-primary hover:text-primary-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-primary hover:text-primary-600 transition-colors">
            How it Works
          </Link>
          <Link href="#comparison" className="text-primary hover:text-primary-600 transition-colors">
            Compare
          </Link>
          <Link
            href="#download"
            className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-600 transition-colors"
          >
            Download Now
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}
