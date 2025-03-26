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
            <div key={feature.title} className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
              <Card className="relative h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <feature.Icon className="size-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {feature.description}
                  </p>
                  <div className="flex gap-4">
                    {feature.stats.map((stat) => (
                      <div key={stat} className="text-sm text-muted-foreground">
                        {stat.replace("$", symbol)}
                      </div>
                    ))}
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
