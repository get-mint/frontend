"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf } from 'lucide-react';

const navItems = [
  { name: "How it Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Compare", href: "#compare" },
];

export function Logo() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-dark-500/80 backdrop-blur-lg" />
        
        <div className="container mx-auto px-4">
          <div className="relative flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-white">Mint</span>
              </Link>
            </motion.div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200" />
                  <div className="relative px-6 py-2 bg-dark-400 rounded-full border border-primary/50 text-white font-medium leading-none">
                    Download Now
                  </div>
                </button>
              </motion.div>
            </nav>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
