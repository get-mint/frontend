export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By installing our browser extension or using our services, you agree to these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Cashback Program</h2>
          <p>
            Our cashback program is subject to the following conditions:
          </p>
          <ul>
            <li>Cashback rates are based on affiliate commissions and may vary</li>
            <li>Rewards are not guaranteed and depend on successful tracking</li>
            <li>Processing times may vary by merchant</li>
            <li>Minimum payout thresholds may apply</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer of Liability</h2>
          <p>
            We are not liable for:
          </p>
          <ul>
            <li>Failed or missing cashback tracking</li>
            <li>Merchant website issues or technical problems</li>
            <li>Changes in cashback rates or availability</li>
            <li>Delays in processing or payment</li>
            <li>Any indirect or consequential losses</li>
          </ul>
        </section>

        <section>
          <h2>4. User Conduct</h2>
          <p>
            Users must not:
          </p>
          <ul>
            <li>Manipulate or abuse the cashback system</li>
            <li>Use automated methods to interact with our service</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Share accounts or misrepresent identity</li>
          </ul>
        </section>

        <section>
          <h2>5. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes are effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
          </p>
        </section>

        <section>
          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend access to our services immediately, without prior notice, for:
          </p>
          <ul>
            <li>Violation of these terms</li>
            <li>Fraudulent or suspicious activity</li>
            <li>Technical or security reasons</li>
            <li>Extended periods of inactivity</li>
          </ul>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the United States. Any disputes shall be subject to the exclusive jurisdiction of the courts in the United States.
          </p>
        </section>
      </div>
    </div>
  );
} 