"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/30 to-primary-600/30 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-8xl font-bold">
              <span className="block text-foreground mb-4">
                It's your money,
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                {" "}
                we help you grab it.
              </span>
            </h1>

            <div className="flex flex-row gap-3 mb-6 justify-center">
              <Button
                size="lg"
                className="rounded-full py-7 text-lg sm:text-xl"
              >
                <div className="flex flex-row gap-2 items-center">
                  Install Mint for Chrome
                  <Leaf className="size-6" />
                </div>
              </Button>

              <Button
                className="rounded-full py-7 text-lg sm:text-xl"
                variant="outline"
              >
                <div className="flex flex-row gap-2 items-center">
                  Learn More
                  <ArrowRight className="size-6" />
                </div>
              </Button>
            </div>

            <div className="flex flex-row gap-4 sm:gap-8 mb-6 justify-center">
              {[
                ["50%", "Commission Split"],
                ["5$", "Minimum Payout"],
                ["100%", "Automated"],
              ].map(([value, label]) => (
                <Card
                  key={label}
                  className="animate-in fade-in slide-in-from-top-4 duration-700 bg-card/5 backdrop-blur-xl border-border flex-1 max-w-[200px]"
                >
                  <CardContent>
                    <div className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                      {value}
                    </div>
                    <div className="text-sm sm:text-md text-muted-foreground">
                      {label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
