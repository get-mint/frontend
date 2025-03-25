import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Install Mint",
    description:
      "Add our extension to your browser in seconds. It's free and takes no setup.",
    highlight: "One-click install",
  },
  {
    title: "Shop as usual",
    description:
      "Continue shopping at your favorite stores. We'll automatically find the best deals.",
    highlight: "5000+ stores",
  },
  {
    title: "Get paid",
    description:
      "Earn real cash back on every purchase. No points, no gift cards—just money.",
    highlight: "Instant payouts",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary mb-2">
            How It Works
          </h2>
          <p className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Three steps to start earning
          </p>
          <p className="text-lg text-muted-foreground">
            Getting cash back has never been easier
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative grid grid-cols-1 gap-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className={`flex items-center gap-6 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="relative flex-none">
                    <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/40">
                        {index + 1}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-primary/20 to-transparent" />
                    )}
                  </div>

                  <div className="flex-1 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
                    <Card className="relative">
                      <CardContent className="p-5">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                          <div className="inline-block px-3 py-0.5 bg-primary/10 rounded-full text-xs font-medium text-primary">
                            {step.highlight}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
