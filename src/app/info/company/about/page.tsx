import { Leaf } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mint</h1>
          </div>
          <h2 className="text-base font-normal">About Us</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Mint is revolutionizing online shopping by making it easier than ever to earn rewards on your purchases. Our mission is to help shoppers save money while supporting their favorite brands.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground">
            Founded by a team of tech enthusiasts and savvy shoppers, Mint was born from a simple idea: shopping rewards should be automatic and effortless. We've built a platform that seamlessly integrates with your shopping experience, ensuring you never miss out on cashback opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            We're on a mission to make online shopping more rewarding. By automating the cashback process and partnering with leading retailers, we're creating a win-win situation for both shoppers and merchants.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-muted-foreground mb-4">
            Our browser extension works quietly in the background to:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Automatically find and apply the best cashback rates</li>
            <li>Track your rewards in real-time</li>
            <li>Secure your shopping data with end-to-end encryption</li>
            <li>Provide seamless integration with supported retailers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Transparency in all our operations</li>
            <li>User privacy and data security</li>
            <li>Continuous innovation and improvement</li>
            <li>Exceptional customer support</li>
            <li>Building lasting partnerships</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground">
            We're always looking for talented individuals who share our passion for innovation and customer service. Check out our{" "}
            <a href="/info/company/careers" className="text-primary hover:underline">
              careers page
            </a>{" "}
            for current opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions or feedback? We'd love to hear from you! Reach out to us at{" "}
            <a href="mailto:team@getmint.lol" className="text-primary hover:underline">
              team@getmint.lol
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
