import { Banknote, Bot, Gift, Zap, Info } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/lib/utils/currency";

const features = [
  {
    Icon: Gift,
    title: "Gift Card & Cash Rewards",
    description:
      "Get your rewards in popular gift cards or cash cardsd. Choose from a wide variety of retailers and brands.",
    stats: ["5$", "Minimum Redemption"],
  },
  {
    Icon: Zap,
    title: "Quick Processing",
    description: "We process your rewards in 48 hours. Get your cash back as quickly as possible. No need to wait.",
    stats: ["48h", "Processing Time"],
  },
  {
    Icon: Bot,
    title: "Smart Detection",
    description: "We automatically detect eligible purchases and apply cash back. All you need to do is click approve.",
    stats: ["100%", "Automated"],
  },
  {
    Icon: Banknote,
    title: "Direct to Wallet",
    description:
      "Your rewards go straight to your digital wallet where you can redeem them for cash or gift cards.",
    stats: ["0%", "Fees"],
  },
];

export function Features() {
  const { symbol } = useCurrency();

  return (
    <section id="features" className="relative py-16 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-3 text-lg rounded-full px-4 border-primary/50 bg-primary/10"
          >
            Features
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Features That Set Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mint does everything you need to maximize your rewards. It's free,
            easy to use, and you can start earning cash back in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="relative h-full">
              <Card className="relative h-full rounded-3xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 flex-grow">
                    {feature.description}
                  </p>

                  <div className="flex">
                    <div className="relative">
                      <Badge
                        variant="outline"
                        className="text-xl font-semibold px-4 py-2 rounded-full"
                      >
                        <span className="text-primary mr-3">
                          {feature.stats[0].replace("$", symbol)}
                        </span>
                        <span className="text-base text-muted-foreground">
                          {feature.stats[1]}
                        </span>
                      </Badge>
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
