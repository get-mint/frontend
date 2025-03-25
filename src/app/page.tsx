"use client";

import { useRef } from "react";

import { Check, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import { Hero } from "./hero";

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
          <p className="text-4xl font-bold tracking-tight text-foreground mb-6">
            Three steps to start earning
          </p>
          <p className="text-xl text-muted-foreground">
            Getting cash back has never been easier
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative animate-in fade-in ${
                  index % 2 === 0
                    ? "slide-in-from-left-4"
                    : "slide-in-from-right-4"
                } duration-700`}
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
                    <Card className="relative group-hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-8">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {step.description}
                          </p>
                          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                            {step.highlight}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div
                      className={`
                      absolute -inset-4 bg-gradient-to-r ${step.color}
                      rounded-2xl opacity-0 group-hover:opacity-100 -z-10
                      transition-opacity duration-300
                    `}
                    />
                  </div>
                </div>
              </div>
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
    <section className="relative py-32 bg-muted overflow-hidden">
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
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Features that set us apart
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to maximize your cash back
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-[1.02] transition-transform duration-300"
            >
              <CardContent className="p-8">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-primary">
                    {feature.stats[0]}
                  </span>
                  <span className="text-muted-foreground">
                    {feature.stats[1]}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              </CardContent>
            </Card>
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
    <section className="relative py-32 bg-muted overflow-hidden">
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
          <h2 className="text-5xl font-bold text-foreground mb-6">
            The Mint Difference
          </h2>
          <p className="text-xl text-muted-foreground">
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

            <Card className="relative backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-left text-lg font-medium text-muted-foreground">
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
                  {comparisonFeatures.map((feature) => (
                    <div
                      key={feature.name}
                      className="grid grid-cols-3 gap-4 items-center group animate-in fade-in slide-in-from-left-4 duration-700"
                    >
                      <div className="text-left text-muted-foreground group-hover:text-foreground transition-colors">
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
                          className="w-6 h-6 text-muted-foreground"
                        >
                          {feature.others ? (
                            <Check size={24} />
                          ) : (
                            <X size={24} />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="relative">
        <section className="relative min-h-screen">
          <Hero />
        </section>

        <section className="relative bg-card py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative">
            <HowItWorks />
          </div>
        </section>

        <section className="relative bg-background py-32">
          <Features />
        </section>

        <section className="relative bg-card py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative">
            <Comparison />
          </div>
        </section>
      </div>
    </main>
  );
}
