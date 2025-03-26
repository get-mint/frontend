import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Install Mint & enter your email",
    description:
      "Add our extension to your browser in seconds. It's free! When you install it, all you need to do is enter your email.",
    highlight: "One-click install",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Shop as usual",
    description:
      "Continue shopping at your favorite stores. Whenever you go to checkout on a compatible site, we'll prompt you to earn cash back. One click and you're done.",
    highlight: "Easy cash back",
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Get paid",
    description:
      "Earn real cash back on every purchase. No points, no gift cards—just money. Use the email you register an account to claim your cash back through our dashboard.",
    highlight: "Fast payouts, real money",
    color: "from-primary/40 to-primary/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge
            variant="outline"
            className="mb-3 text-lg rounded-full px-4 border-primary/50 bg-primary/10"
          >
            How It Works
          </Badge>

          <p className="text-4xl font-bold tracking-tight text-foreground mb-6">
            3 simple steps to start earning
          </p>
          <p className="text-xl text-muted-foreground">
            Getting cash back has never been easier
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div
                  className={`
                  flex items-center gap-6 md:gap-12 
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
                >
                  <div className="relative flex-none">
                    <div
                      className={`
                      size-16 md:size-32 rounded-xl md:rounded-3xl bg-gradient-to-br ${step.color}
                      flex items-center justify-center
                    `}
                    >
                      <span className="text-4xl md:text-6xl font-bold text-primary/40">
                        {index + 1}
                      </span>
                    </div>
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
