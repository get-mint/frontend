import { BarChart3, Wallet, BanknoteIcon } from 'lucide-react';

const features = [
  {
    name: 'Track Expenses',
    description: 'Monitor your spending habits with detailed categorization and insights.',
    icon: BarChart3,
  },
  {
    name: 'Set Budgets',
    description: "Create custom budgets and get notified when you're approaching limits.",
    icon: Wallet,
  },
  {
    name: 'Financial Goals',
    description: 'Set and track progress towards your savings and investment goals.',
    icon: BanknoteIcon,
  },
];

export function Features() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to manage your money
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Mint provides all the tools you need to take control of your finances,
          from expense tracking to goal setting.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
