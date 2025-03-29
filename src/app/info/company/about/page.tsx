import { Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Vision</h2>
          <p>
            At Mint, we're revolutionizing the way people save money while shopping online. Our vision is to make every purchase more rewarding by automatically finding and applying the best cashback rates and discount codes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Story</h2>
          <p>
            Born from the frustration of missing out on savings and the complexity of existing cashback platforms, Mint provides a seamless, automated solution that works in the background while you shop. We believe that everyone should have access to the best deals without the hassle of searching for them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Technology</h2>
          <p>
            Our browser extension uses advanced technology to instantly identify savings opportunities and automatically applies them at checkout. No more copying and pasting coupon codes or remembering to activate cashback - Mint handles it all for you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Promise</h2>
          <p>
            We're committed to transparency, security, and maximizing savings for our users. Every feature we build and every partnership we forge is focused on delivering more value to our community of smart shoppers.
          </p>
        </section>
      </div>
    </div>
  );
} 