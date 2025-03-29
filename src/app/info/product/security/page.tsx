import { Leaf } from "lucide-react";
import { InfoPage } from "@/components/templates/info-page";

const sections = [
  {
    title: "End-to-End Encryption",
    content: (
      <p className="text-muted-foreground">
        All communication between Mint and our servers is protected with SSL/TLS
        encryption — the same technology used by banks and financial
        institutions. We employ industry-standard AES-256 encryption for data at
        rest and perfect forward secrecy for data in transit, ensuring your
        information remains secure at all times.
      </p>
    ),
  },
  {
    title: "Minimal Data Collection",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          We adhere to the principle of data minimization, collecting only
          what's absolutely necessary to track your rewards and affiliate
          purchases. Our commitment to your privacy means we never sell personal
          data under any circumstances.
        </p>
        <p className="text-muted-foreground">
          The data we collect is strictly limited to:
        </p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-2">
          <li>Purchase information from supported retailers</li>
          <li>Basic account details for reward tracking</li>
          <li>Essential analytics to improve our service</li>
        </ul>
      </>
    ),
  },
  {
    title: "No Tracking Outside of Shopping",
    content: (
      <p className="text-muted-foreground">
        Mint's extension is designed with privacy in mind. It only activates on
        supported shopping websites and remains completely dormant elsewhere. We
        implement strict domain isolation and content security policies to
        ensure the extension cannot access or track your activity outside of
        supported platforms.
      </p>
    ),
  },
  {
    title: "Secure Authentication",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Partner Network Safety",
    content: (
      <p className="text-muted-foreground">
        We carefully vet all our partnerships to ensure the highest level of
        security. All affiliate offers are sourced exclusively from verified
        networks like Rakuten, Amazon Associates, and other reputable programs.
        Our partnerships undergo regular security assessments to maintain
        compliance with industry standards.
      </p>
    ),
  },
  {
    title: "You're in Control",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Compliance and Certifications",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          Mint maintains compliance with major data protection regulations and
          security standards:
        </p>
        <ul className="list-disc ml-6 text-muted-foreground space-y-2">
          <li>GDPR compliance for European users</li>
          <li>CCPA compliance for California residents</li>
          <li>Regular third-party security audits</li>
          <li>SOC 2 Type II certification in progress</li>
        </ul>
      </>
    ),
  },
  {
    title: "Contact Security Team",
    content: (
      <p className="text-muted-foreground">
        Have questions or concerns about security? Our dedicated security team
        is here to help. Contact us at{" "}
        <a
          href="mailto:team@getmint.lol"
          className="text-primary hover:underline"
        >
          team@getmint.lol
        </a>
      </p>
    ),
  },
];

export default function SecurityPage() {
  return (
    <InfoPage
      title="Security"
      icon={Leaf}
      sections={sections}
      className="space-y-12"
    />
  );
}
