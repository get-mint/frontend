import { Card, CardContent } from "@/components/ui/card";

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

export function HowItWorks() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary mb-3">
            How It Works
          </h2>
          <p className="text-4xl font-bold tracking-tight text-foreground mb-6">
            Three steps to start earning
          </p>
          <p className="text-xl text-muted-foreground">
            Getting cash back has never been easier
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
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
                      flex items-center justify-center
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
                    <Card>
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
}
