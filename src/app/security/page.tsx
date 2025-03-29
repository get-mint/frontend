import { Leaf } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mint</h1>
          </div>
          <h2 className="text-base font-normal">Security at Mint</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          At Mint, your privacy and security are our top priorities. We've built our extension with modern security practices to ensure your data stays safe and your experience remains seamless.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">End-to-End Encryption</h2>
          <p className="text-muted-foreground">
            All communication between Mint and our servers is protected with SSL/TLS encryption — the same technology used by banks and financial institutions. We employ industry-standard AES-256 encryption for data at rest and perfect forward secrecy for data in transit, ensuring your information remains secure at all times.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Minimal Data Collection</h2>
          <p className="text-muted-foreground mb-4">
            We adhere to the principle of data minimization, collecting only what's absolutely necessary to track your rewards and affiliate purchases. Our commitment to your privacy means we never sell personal data under any circumstances.
          </p>
          <p className="text-muted-foreground">
            The data we collect is strictly limited to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-2">
            <li>Purchase information from supported retailers</li>
            <li>Basic account details for reward tracking</li>
            <li>Essential analytics to improve our service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Tracking Outside of Shopping</h2>
          <p className="text-muted-foreground">
            Mint's extension is designed with privacy in mind. It only activates on supported shopping websites and remains completely dormant elsewhere. We implement strict domain isolation and content security policies to ensure the extension cannot access or track your activity outside of supported platforms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Secure Authentication</h2>
          <p className="text-muted-foreground mb-4">
            We implement robust authentication measures to protect your account:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>OAuth 2.0-based secure login methods</li>
            <li>Optional multi-factor authentication (MFA)</li>
            <li>Secure password hashing using bcrypt</li>
            <li>Regular security audits and penetration testing</li>
            <li>Automatic session timeout for inactive users</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Partner Network Safety</h2>
          <p className="text-muted-foreground">
            We carefully vet all our partnerships to ensure the highest level of security. All affiliate offers are sourced exclusively from verified networks like Rakuten, Amazon Associates, and other reputable programs. Our partnerships undergo regular security assessments to maintain compliance with industry standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">You're in Control</h2>
          <p className="text-muted-foreground mb-4">
            We believe in transparency and user choice. At any time, you can:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Delete your account and all associated data</li>
            <li>Export your complete data history</li>
            <li>Disable tracking temporarily or permanently</li>
            <li>Manage your privacy preferences</li>
            <li>Review and revoke third-party access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compliance and Certifications</h2>
          <p className="text-muted-foreground mb-4">
            Mint maintains compliance with major data protection regulations and security standards:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>GDPR compliance for European users</li>
            <li>CCPA compliance for California residents</li>
            <li>Regular third-party security audits</li>
            <li>SOC 2 Type II certification in progress</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Security Team</h2>
          <p className="text-muted-foreground">
            Have questions or concerns about security? Our dedicated security team is here to help. Contact us at{" "}
            <a href="mailto:team@getmint.lol" className="text-primary hover:underline">
              team@getmint.lol
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 