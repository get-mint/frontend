"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Mint</span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="#how-it-works" className="text-primary hover:text-primary-600 transition-colors">
            How it Works
          </Link>
          <Link href="#features" className="text-primary hover:text-primary-600 transition-colors">
            Features
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
