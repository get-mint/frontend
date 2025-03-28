import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Install Mint & Enter Your Email",
    description:
      "Add our extension to your browser in seconds. It's free! When you install it, all you need to do is enter your email and you can start earning cash back in minutes.",
    highlight: "Two-click install",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Shop as Usual",
    description:
      "Continue shopping at your favorite stores. Whenever you go to checkout on a compatible site, we'll prompt you to earn cash back. One click, confirm, and you're done.",
    highlight: "Easy rewards",
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Get paid",
    description:
      "Earn rewards in your account. We partner with top brands to allow you to redeem your rewards for cash, gift cards, and more.",
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
            3 Simple Steps to Start Earning
          </p>
          <p className="text-xl text-muted-foreground">
            Mint is a browser extension that allows you to earn cash back on
            your purchases. You can install it in seconds and start earning cash
            back in minutes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative grid grid-cols-1 gap-12">
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
                    <Card className="relative rounded-4xl">
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
