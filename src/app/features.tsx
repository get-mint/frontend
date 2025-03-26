import { Banknote, Bot, DollarSign, Zap, Info } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    Icon: Banknote,
    title: "Real cash back",
    description:
      "Get your cash back in cash. No points, no gift cards, no hidden fees.",
    stats: ["5$", "minimum withdrawal"],
  },
  {
    Icon: Zap,
    title: "Instant Processing",
    description:
      "Quick and simple cash back processing.",
    stats: ["48h", "processing time"],
  },
  {
    Icon: Bot,
    title: "Smart detection",
    description: "Automatically finds and applies the best cash back rates.",
    stats: ["100%", "automated"],
  },
  {
    Icon: DollarSign,
    title: "Direct to Wallet",
    description:
      "Your cash back goes straight to your wallet. No middleman, no hassle.",
    stats: ["0%", "fees"],
  },
];

export function Features() {
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
            Everything you need to maximize your cash back
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {feature.stats[0]}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {feature.stats[1]}
                    </span>
                  </div>
                  <Info className="size-4 absolute top-3 right-3 text-muted-foreground" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
