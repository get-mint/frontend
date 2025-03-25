"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { Check, X, Leaf } from "lucide-react";
import Link from "next/link";

// FloatingCard Component
interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FloatingCard = ({
  children,
  delay = 0,
  className = "",
}: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ParticleField Component
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

// Navigation Component
const navItems = [
  { name: "How it Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Compare", href: "#compare" },
];

const Navigation = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
        <div className="absolute inset-0 bg-dark-500/80 backdrop-blur-lg" />

        <div className="container mx-auto px-4">
          <div className="relative flex h-20 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-white">Mint</span>
              </Link>
            </motion.div>

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
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <ParticleField />

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
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto text-center">
          <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
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

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
                <div className="relative px-8 py-4 bg-primary rounded-full border border-primary/50 text-white font-semibold text-lg leading-none">
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
    </section>
  );
};

// How It Works Section
const steps = [
  {
    title: "Install Mint",
    description:
      "Add our extension to your browser in seconds. It's free and takes no setup.",
    highlight: "One-click install",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Shop as usual",
    description:
      "Continue shopping at your favorite stores. We'll automatically find the best deals.",
    highlight: "5000+ stores",
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Get paid",
    description:
      "Earn real cash back on every purchase. No points, no gift cards—just money.",
    highlight: "Instant payouts",
    color: "from-primary/40 to-primary/20",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-24"
        >
          <h2 className="text-base font-semibold leading-7 text-primary mb-3">
            How It Works
          </h2>
          <p className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Three steps to start earning
          </p>
          <p className="text-xl text-gray-600">
            Getting cash back has never been easier
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div
                  className={`
                  flex items-center gap-12 
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
                >
                  <div className="relative flex-none">
                    <div
                      className={`
                      w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color}
                      flex items-center justify-center transform rotate-12
                      group-hover:rotate-0 transition-transform duration-300
                    `}
                    >
                      <span className="text-6xl font-bold text-primary/40">
                        {index + 1}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1 relative group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                        <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                          {step.highlight}
                        </div>
                      </div>
                    </motion.div>

                    <div
                      className={`
                      absolute -inset-4 bg-gradient-to-r ${step.color}
                      rounded-2xl opacity-0 group-hover:opacity-100 -z-10
                      transition-opacity duration-300
                    `}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const features = [
  {
    icon: "💸",
    title: "Instant Cash Back",
    description:
      "Get your money instantly. No waiting periods, no minimum thresholds.",
    stats: ["50%", "commission split"],
  },
  {
    icon: "🌐",
    title: "Universal Coverage",
    description:
      "Works with all major online retailers and thousands of others.",
    stats: ["5000+", "partner stores"],
  },
  {
    icon: "🤖",
    title: "Smart Detection",
    description: "Automatically finds and applies the best cash back rates.",
    stats: ["100%", "automated"],
  },
  {
    icon: "💰",
    title: "Real Cash",
    description:
      "Get real money, not points or gift cards. It's your money, after all.",
    stats: ["$0", "minimum payout"],
  },
];

const Features = () => {
  return (
    <section className="relative py-32 bg-dark-500 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,224,143,0.1) 0%, rgba(0,224,143,0) 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
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
            Features that set us apart
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to maximize your cash back
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-dark-400 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-dark-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative p-8">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-primary">
                    {feature.stats[0]}
                  </span>
                  <span className="text-gray-500">{feature.stats[1]}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Section
const comparisonFeatures = [
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

const Comparison = () => {
  return (
    <section className="relative py-32 bg-dark-400 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,224,143,0.05) 0%, rgba(0,224,143,0) 70%)",
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
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-2xl blur-lg opacity-25" />

            <div className="relative bg-dark-500 rounded-xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-left text-lg font-medium text-gray-400">
                  Features
                </div>
                <div className="text-center text-lg font-medium text-primary">
                  Mint
                </div>
                <div className="text-center text-lg font-medium text-amber-500">
                  Others
                </div>
              </div>

              <div className="space-y-6">
                {comparisonFeatures.map((feature, index) => (
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
};

// Main Page Component
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fbfbfd]">
      <div className="relative">
        <section className="relative min-h-screen">
          <Hero />
        </section>

        <section className="relative bg-white py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd] to-white" />
          <div className="relative">
            <HowItWorks />
          </div>
        </section>

        <section className="relative bg-[#fbfbfd] py-32">
          <Features />
        </section>

        <section className="relative bg-white py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd] to-white" />
          <div className="relative">
            <Comparison />
          </div>
        </section>
      </div>
    </main>
  );
}
