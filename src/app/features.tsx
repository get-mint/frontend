import { Card, CardContent } from "@/components/ui/card";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative hover:scale-[1.02] transition-transform duration-300"
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
}
