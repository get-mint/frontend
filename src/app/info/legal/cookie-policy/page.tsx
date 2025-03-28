export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1>Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website or use our browser extension. They help us provide and improve our services by:
          </p>
          <ul>
            <li>Remembering your preferences and settings</li>
            <li>Understanding how you use our services</li>
            <li>Enabling cashback tracking and processing</li>
            <li>Providing personalized experiences</li>
          </ul>
        </section>

        <section>
          <h2>2. Types of Cookies We Use</h2>
          <p>
            We use the following types of cookies:
          </p>
          <ul>
            <li>Essential cookies: Required for basic functionality</li>
            <li>Performance cookies: Help us improve our services</li>
            <li>Functionality cookies: Remember your preferences</li>
            <li>Targeting/advertising cookies: Deliver relevant content</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookie Usage</h2>
          <p>
            Our cookies are used for:
          </p>
          <ul>
            <li>Authentication and security</li>
            <li>Tracking cashback eligibility</li>
            <li>Session management</li>
            <li>Analytics and performance monitoring</li>
            <li>Personalization and preferences</li>
          </ul>
        </section>

        <section>
          <h2>4. Third-Party Cookies</h2>
          <p>
            We may allow third parties to place cookies on your device for:
          </p>
          <ul>
            <li>Analytics and tracking</li>
            <li>Advertising purposes</li>
            <li>Social media integration</li>
            <li>Merchant tracking and verification</li>
          </ul>
        </section>

        <section>
          <h2>5. Cookie Management</h2>
          <p>
            You can manage your cookie preferences through:
          </p>
          <ul>
            <li>Browser settings</li>
            <li>Our cookie consent tool</li>
            <li>Extension settings</li>
            <li>Device settings</li>
          </ul>
          <p>
            Note: Disabling certain cookies may limit functionality or prevent cashback tracking.
          </p>
        </section>

        <section>
          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy to reflect:
          </p>
          <ul>
            <li>Changes in our practices</li>
            <li>New regulatory requirements</li>
            <li>Technology improvements</li>
            <li>Service enhancements</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have questions about our Cookie Policy or how we use cookies, please contact us at team@getmint.lol
          </p>
        </section>
      </div>
    </div>
  );
} 