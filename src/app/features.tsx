import { Banknote, Bot, Gift, Zap, Info } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/lib/utils/currency";

const features = [
  {
    Icon: Gift,
    title: "Gift Card Rewards",
    description:
      "Get your rewards in popular gift cards. Choose from a wide variety of retailers and brands.",
    stats: ["5$", "minimum redemption"],
  },
  {
    Icon: Zap,
    title: "Instant Processing",
    description: "Quick and simple gift card processing.",
    stats: ["48h", "processing time"],
  },
  {
    Icon: Bot,
    title: "Smart detection",
    description: "Automatically finds and applies the best cash back rates.",
    stats: ["100%", "automated"],
  },
  {
    Icon: Banknote,
    title: "Direct to Wallet",
    description:
      "Your rewards go straight to your digital wallet. No middleman, no hassle.",
    stats: ["0%", "fees"],
  },
];

export function Features() {
  const { symbol } = useCurrency();

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-3 text-lg rounded-full px-4 border-primary/50 bg-primary/10"
          >
            Features
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Features that set us apart
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to maximize your rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="relative h-full">
              <Card className="relative h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8 flex-grow">
                    {feature.description}
                  </p>
                  <div className="flex">
                    <div className="relative">
                      <div className="absolute -inset-[2px] bg-primary/20 dark:bg-primary/20 rounded-full blur-sm" />
                      <div className="relative bg-background/80 dark:bg-[#1a1a1a] px-4 py-2 rounded-full border border-border/50 dark:border-transparent">
                        <span className="text-xl font-semibold text-primary mr-3">
                          {feature.stats[0].replace("$", symbol)}
                        </span>
                        <span className="text-base text-muted-foreground">
                          {feature.stats[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
