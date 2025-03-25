import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pt-32 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Your Personal Finance
        <br />
        <span className="text-primary">Made Simple</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Track your spending, set budgets, and reach your financial goals with Mint.
        The modern way to manage your money.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/auth/signup">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
      </div>
    </section>
  );
}
