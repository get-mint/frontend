import { Leaf } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mint</h1>
          </div>
          <h2 className="text-base font-normal">Cookie Policy</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          This Cookie Policy explains how Mint uses cookies and similar technologies to provide, customize, and improve your experience.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
          <p className="text-muted-foreground">
            Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Essential cookies: Required for basic site functionality</li>
            <li>Performance cookies: Help us understand how visitors use our site</li>
            <li>Functionality cookies: Remember your preferences</li>
            <li>Targeting cookies: Track your shopping activity for rewards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies to:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Remember your login status</li>
            <li>Track your eligible purchases for cashback</li>
            <li>Improve our services</li>
            <li>Protect against fraud</li>
            <li>Analyze site performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
          <p className="text-muted-foreground">
            Some cookies are placed by our partners and service providers. These third parties help us track purchases, process payments, and analyze site usage. We carefully select these partners and ensure they handle your data responsibly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">
            You can control cookies through your browser settings. However, blocking some types of cookies may impact your experience and the services we can offer.
          </p>
          <p className="text-muted-foreground">
            Options typically include:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Accepting all cookies</li>
            <li>Being notified when cookies are set</li>
            <li>Blocking all cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Cookie Policy to reflect changes in our practices or for operational, legal, or regulatory reasons.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about our Cookie Policy, please contact us at{" "}
            <a href="mailto:team@getmint.lol" className="text-primary hover:underline">
              team@getmint.lol
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 