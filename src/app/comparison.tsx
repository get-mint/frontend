import { Check, X, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const comparisonFeatures = [
  {
    name: "Transparent rewards",
    description: "You see exactly how much cashback you earn and how we calculate it — no mystery points or hidden conditions.",
    mint: true,
    others: false,
  },
  {
    name: "Low minimum redemption",
    description: "You only need $5 to cash out, making it easy to actually access your rewards.",
    mint: true,
    others: false,
  },
  {
    name: "Popular gift cards",
    description: "Choose from brands you actually use — Amazon, Target, Starbucks, and more — or just get cash.",
    mint: true,
    others: false,
  },
  {
    name: "Fast processing",
    description: "Your money is ready to withdraw within 3 days — not weeks or months like other platforms.",
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
          <Badge
            variant="outline"
            className="mb-3 text-lg rounded-full px-4 border-primary/50 bg-primary/10"
          >
            Comparison
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            The Mint Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why pick the Mint browser extension over competitors? Here's a quick
            comparison of the features we offer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-2xl blur-lg opacity-25" />

            <div className="relative bg-background border rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border-b border-r p-6 text-left text-lg font-medium text-muted-foreground bg-muted/50 w-[70%]">
                      Features
                    </th>
                    <th className="border-b border-r p-4 text-center text-lg font-medium text-primary bg-muted/50 w-[15%]">
                      Mint
                    </th>
                    <th className="border-b p-4 text-center text-lg font-medium text-amber-500 bg-muted/50 w-[15%]">
                      Others
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name}>
                      <td
  className={`border-r p-6 text-foreground ${
    index !== comparisonFeatures.length - 1 ? "border-b" : ""
  }`}
>
  <div className="font-medium text-base">{feature.name}</div>
  <div className="text-sm text-muted-foreground mt-1">
    {feature.description}
  </div>
</td>
                      <td
                        className={`border-r p-4 ${
                          index !== comparisonFeatures.length - 1
                            ? "border-b"
                            : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          <div className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_3px_rgba(52,211,153,0.7)]">
                            {feature.mint ? (
                              <Check size={18} />
                            ) : (
                              <Minus size={18} />
                            )}
                          </div>
                        </div>
                      </td>
                      <td
                        className={`p-4 ${
                          index !== comparisonFeatures.length - 1
                            ? "border-b"
                            : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          <div className="w-5 h-5 text-foreground">
                            {feature.others ? (
                              <Check size={18} />
                            ) : (
                              <X size={18} />
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
