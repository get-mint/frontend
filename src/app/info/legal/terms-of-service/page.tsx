import { Leaf } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Mint</h1>
        </div>
        <p className="text-muted-foreground">Last Updated: March 28, 2025</p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            These Terms of Use (the "Agreement") are a contract between you and Mint Technologies Inc. ("Mint") and govern your access to and use of the Mint browser extension (the "Mint Extension"), the Mint website located at www.getmint.lol and all other Mint-branded websites (each, a "Website"), and other software applications and online services provided by Mint (collectively, the "Service").
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
          <ul className="text-muted-foreground list-disc pl-6 space-y-2">
            <li>Mint does not use a point-based rewards system. Instead, Mint pays users a percentage of affiliate commission in cash or gift cards earned through purchases made via affiliate links applied automatically by the extension.</li>
            <li>You must link your Mint account to a valid PayPal or other supported payout method to receive earnings.</li>
            <li>Mint earnings may expire if you do not cash out within 365 days of accumulation.</li>
            <li>For more information about payouts and supported retailers, please refer to our Payout FAQ.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Users Based Outside the United States</h2>
          <p className="text-muted-foreground">
            Mint currently supports users in the United States only. If you are outside the U.S., you may browse the website, but Mint cash-back features may not be available to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Accepting the Terms</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              By using any portion of the Service, you agree to comply with and be bound by this Agreement. This Agreement applies to you whether you are a "Member" (i.e., you have created a Mint account) or a "Visitor" (i.e., you have not created an account). "You" refers to a Visitor or Member. "We", "us", or "our" refers to Mint.
            </p>
            <p>
              You must be at least 18 years old to use the Service. You represent that you are legally able to form a binding contract. The Service is for personal, non-commercial use.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Amendments to this Agreement</h2>
          <p className="text-muted-foreground">
            Mint may update these Terms at any time. Updated terms will be posted at getmint.lol/terms, with the date of last revision. Your continued use of the Service after changes constitutes agreement to the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy and Personal Information</h2>
          <p className="text-muted-foreground">
            The Service is subject to Mint's privacy practices. Please read our Privacy Policy to understand how we collect, use, and share your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Description of the Service</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Mint is a browser extension that helps users save money by automatically applying affiliate discounts and codes at checkout and sharing a portion of the commission back with the user as cash or gift card payouts.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mint works with select affiliate programs and partner merchants.</li>
              <li>Mint earns revenue via affiliate commission when purchases are made using affiliate links.</li>
              <li>You are paid real cash or gift cards directly—no points, conversions, or minimum redemption hoops.</li>
              <li>You must be logged in and have the extension active during checkout to qualify for cash-back. Not all stores are eligible, and affiliate tracking may vary by merchant.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Merchant Transactions</h2>
          <p className="text-muted-foreground">
            Mint is not responsible for your purchases from third-party merchants. If you have issues with orders, you must contact the merchant directly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cash-Back & Payout Terms</h2>
          <ul className="text-muted-foreground list-disc pl-6 space-y-2">
            <li>Users can withdraw cash-back earnings via PayPal, Venmo, or supported gift cards.</li>
            <li>Minimum payout thresholds may apply.</li>
            <li>Mint reserves the right to withhold or reverse earnings for returns, fraud, or ineligibility.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Referral Program</h2>
          <p className="text-muted-foreground">
            Mint may offer cash incentives when you refer new users who sign up and complete qualifying purchases. You may not create fake accounts or use spammy tactics. Abuse will result in disqualification.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use of the Mint Extension</h2>
          <p className="text-muted-foreground">
            You agree not to misuse the Service, reverse-engineer it, or interfere with its functionality. You are responsible for your login and account security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-muted-foreground">
            Click <a href="/info/security" className="text-primary hover:underline">here</a> to learn more about how Mint keeps your data safe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Legal Disclaimers, Arbitration, and Governing Law</h2>
          <p className="text-muted-foreground">
            By using Mint, you agree to binding arbitration, waive class actions, and agree to jurisdiction in Massachusetts. See the full legal terms in the original section above. To opt out of arbitration, contact: privacy@getmint.lol
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Questions or suggestions? Reach out to us at team@getmint.lol
          </p>
        </section>
      </div>

      <p className="text-muted-foreground text-center mt-12">
        This Agreement reflects Mint's commitment to transparency and fair use. Your trust means everything to us. 💚
      </p>
    </div>
  );
}
