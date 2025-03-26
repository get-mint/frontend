"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { ArrowRight, Info, Leaf } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const stats = [
  {
    value: "50%",
    label: "Commission Split",
    description: "We split our commission with you 50/50. When merchants pay us for bringing them customers, you get half of what we earn.",
  },
  {
    value: "5$",
    label: "Minimum Payout",
    description: "You can withdraw your earnings once you reach $5. No need to wait for months to access your money.",
  },
  {
    value: "100%",
    label: "Automated",
    description: "Our system automatically detects eligible purchases and applies cash back. No manual work needed.",
  },
];

function ParticleField() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 dark:bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
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
}

export function Hero() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 from-background to-muted">
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[600px] aspect-square rounded-full bg-gradient-to-r from-primary/30 to-primary-600/30 blur-3xl"
        />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="container mx-auto relative px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-8xl font-bold flex flex-col gap-0">
              <span className="text-foreground">It's your money,</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 pb-2">
                we help you grab it.
              </span>
            </h1>

            <div className="flex flex-row gap-3 mb-8 justify-center">
              <Button size="lg" className="rounded-full py-7 text-lg">
                <div className="flex flex-row gap-2 items-center">
                  Download Mint
                  <Leaf className="size-6" />
                </div>
              </Button>

              <Button
                className="rounded-full py-7 text-lg"
                variant="outline"
                onClick={() => {
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex flex-row gap-2 items-center">
                  Learn More
                  <ArrowRight className="size-6" />
                </div>
              </Button>
            </div>

            <div className="flex flex-row gap-4 sm:gap-8 mb-6 justify-center">
              {stats.map((stat) => (
                <HoverCard 
                  key={stat.label} 
                  openDelay={0}
                  closeDelay={0}
                >
                  <HoverCardTrigger asChild>
                    <Card className="relative animate-in fade-in slide-in-from-top-4 duration-700 bg-card/5 backdrop-blur-xl border-border flex-1 max-w-[200px] group cursor-pointer">
                      <CardContent>
                        <div className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-sm sm:text-md text-muted-foreground">
                          {stat.label}
                        </div>
                        <Info className="size-4 absolute top-3 right-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent 
                    className="w-80 bg-white/5 dark:bg-black/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-xl"
                    align="center"
                    sideOffset={5}
                    forceMount
                  >
                    <div className="flex justify-between space-x-4 p-2">
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold text-primary">{stat.label}</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
