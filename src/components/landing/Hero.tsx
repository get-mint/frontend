"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FloatingCard = ({ children, delay = 0, className = "" }: FloatingCardProps) => {
  const { x, y } = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 50, damping: 10 });
  const positionX = useSpring(useMotionValue(0), { stiffness: 50, damping: 15 });
  const positionY = useSpring(useMotionValue(0), { stiffness: 50, damping: 15 });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    
    const moveX = (x - centerX) / 30;
    const moveY = (y - centerY) / 30;
    
    rotateX.set(-moveY);
    rotateY.set(moveX);
    positionX.set(moveX / 2);
    positionY.set(moveY / 2);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{
        rotateX,
        rotateY,
        x: positionX,
        y: positionY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <ParticleField />
        
        {/* Glowing orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/30 to-primary-600/30 blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          style={{ y: textY, opacity }}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            {[
              ["50%", "Commission Split"],
              ["5000+", "Partner Stores"],
              ["Instant", "Cash Out"],
            ].map(([value, label], index) => (
              <FloatingCard
                key={label}
                delay={index * 0.2}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-white"
              >
                <div className="text-4xl font-bold mb-2">{value}</div>
                <div className="text-gray-400">{label}</div>
              </FloatingCard>
            ))}
          </div>

          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-7xl md:text-8xl font-bold">
              <span className="block text-white mb-4">It's your money.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-600">
                Mint helps you grab it.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Turn shopping into cash — instantly.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
                <div className="relative px-8 py-4 bg-black rounded-full border border-primary/50 text-white font-semibold text-lg leading-none">
                  Download Mint Extension
                </div>
              </button>
            </motion.div>

            <p className="text-sm text-gray-500">
              Free to install • No credit card required
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-white/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
