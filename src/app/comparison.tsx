import { Check, X, Minus } from "lucide-react";

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
    <section className="relative pt-12 pb-20 overflow-hidden">
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
            
            <div className="relative bg-background border rounded-lg overflow-hidden shadow-sm">
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
                      <td className={`border-r p-6 text-muted-foreground ${index !== comparisonFeatures.length - 1 ? 'border-b' : ''}`}>
                        {feature.name}
                      </td>
                      <td className={`border-r p-4 ${index !== comparisonFeatures.length - 1 ? 'border-b' : ''}`}>
                        <div className="flex justify-center">
                          <div className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_3px_rgba(52,211,153,0.7)]">
                            {feature.mint ? <Check size={18} /> : <Minus size={18} />}
                          </div>
                        </div>
                      </td>
                      <td className={`p-4 ${index !== comparisonFeatures.length - 1 ? 'border-b' : ''}`}>
                        <div className="flex justify-center">
                          <div className="w-5 h-5 text-muted-foreground">
                            {feature.others ? <Check size={18} /> : <X size={18} />}
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
