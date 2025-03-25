import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Globe2, Bot, DollarSign } from "lucide-react";

const features = [
  {
    Icon: Banknote,
    title: "Instant Cash Back",
    description:
      "Get your money instantly. No waiting periods, no minimum thresholds.",
    stats: ["50%", "commission split"],
  },
  {
    Icon: Globe2,
    title: "Universal Coverage",
    description:
      "Works with all major online retailers and thousands of others.",
    stats: ["5000+", "partner stores"],
  },
  {
    Icon: Bot,
    title: "Smart Detection",
    description: "Automatically finds and applies the best cash back rates.",
    stats: ["100%", "automated"],
  },
  {
    Icon: DollarSign,
    title: "Real Cash",
    description:
      "Get real money, not points or gift cards. It's your money, after all.",
    stats: ["$$$", "straight to your wallet"],
  },
];

export function Features() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20">
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
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
