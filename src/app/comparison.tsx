import { Check, X } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const comparisonFeatures = [
  {
    name: "Instant Cash Back",
    mint: true,
    others: false,
  },
  {
    name: "No Minimum Payout",
    mint: true,
    others: false,
  },
  {
    name: "Automatic Detection",
    mint: true,
    others: false,
  },
  {
    name: "Universal Coverage",
    mint: true,
    others: false,
  },
  {
    name: "Real Cash (Not Points)",
    mint: true,
    others: false,
  },
  {
    name: "Zero Waiting Period",
    mint: true,
    others: false,
  },
];

export function Comparison() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            The Mint Difference
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we compare to traditional cash back services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-2xl blur-lg opacity-25" />

            <Card className="relative backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-left text-lg font-medium text-muted-foreground">
                    Features
                  </div>
                  <div className="text-center text-lg font-medium text-primary">
                    Mint
                  </div>
                  <div className="text-center text-lg font-medium text-amber-500">
                    Others
                  </div>
                </div>

                <div className="space-y-6">
                  {comparisonFeatures.map((feature) => (
                    <div
                      key={feature.name}
                      className="grid grid-cols-3 gap-4 items-center group"
                    >
                      <div className="text-left text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature.name}
                      </div>
                      <div className="flex justify-center">
                        <div className="w-6 h-6 text-primary hover:scale-110 transition-transform">
                          {feature.mint ? <Check size={24} /> : <X size={24} />}
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-6 h-6 text-muted-foreground hover:scale-110 transition-transform">
                          {feature.others ? (
                            <Check size={24} />
                          ) : (
                            <X size={24} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
