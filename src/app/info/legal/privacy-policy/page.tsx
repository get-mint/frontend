import { Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Leaf className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Mint</h1>
      </div>
      
      <p className="text-muted-foreground text-center mb-12">Last Updated: March 28, 2025</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="what-is-personal-data">
          <AccordionTrigger>What Is Personal Data at Mint?</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                This Privacy Policy ("Policy") explains how Mint Technologies, Inc. ("Mint," "we," or "us") collects, uses, and shares information from users of our services. Our services include the Mint browser extension, mobile applications, and related digital products (collectively, the "Services").
              </p>
              <p>
                Please note: if you interact with external websites, retailers, or merchants through our Services, their policies will govern your experience on their platforms. We are not responsible for their privacy practices.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-collection">
          <AccordionTrigger>Personal Data Mint Collects from You</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <h3>Personal Identifiers</h3>
              <p>When you use Mint, we may collect:</p>
              <ul>
                <li>Your name, email, and password (if you register)</li>
                <li>Your IP address and device/browser details</li>
                <li>A unique user ID tied to your Mint account</li>
                <li>Information from third-party sign-ins (e.g., Google login)</li>
              </ul>
              
              <h3>Payment Information</h3>
              <p>
                If you make a purchase, Mint may collect billing information (e.g., name, address, payment method) to process cashback, gift card redemptions, or other rewards. Payment data is processed via secure third-party providers and is not stored directly by Mint.
              </p>

              <h3>Shopping & Usage Data</h3>
              <p>When you interact with partner stores, Mint collects:</p>
              <ul>
                <li>URLs and domain names of visited stores</li>
                <li>Product pages viewed</li>
                <li>Items added to carts or purchased</li>
                <li>Coupon codes and cashback activations</li>
                <li>Clickstream behavior (how you navigate our Services)</li>
              </ul>

              <h3>Inference & Preference Data</h3>
              <p>
                Mint may infer your preferences based on your browsing and purchasing history to show better deals, relevant cashback offers, or exclusive content.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="privacy-rights">
          <AccordionTrigger>Your Privacy Rights at Mint</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                Mint reserves the right to collect, use, share, or sell user data, unless the user explicitly opts out. You may opt out of data sharing or selling by adjusting your settings in the Mint extension or by contacting support at privacy@mintcashback.com.
              </p>
              <p>
                We comply with applicable laws such as the California Consumer Privacy Act (CCPA) and General Data Protection Regulation (GDPR) where required.
              </p>
              <p>Depending on your location, you may:</p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Delete your Mint account and related data</li>
                <li>Opt out of data sales or personalized advertising</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-sharing">
          <AccordionTrigger>Mint's Sharing of Personal Data</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>We may share your information:</p>
              <ul>
                <li>With service providers who help operate Mint (e.g., hosting, analytics, payments)</li>
                <li>With affiliate partners and merchants for cashback tracking and commission purposes</li>
                <li>With third parties for marketing or data monetization (unless you opt out)</li>
                <li>With authorities when required by law or for legal protection</li>
                <li>With a buyer or successor if Mint is acquired or merged</li>
              </ul>
              <p>We do not knowingly sell or share sensitive personal data, such as biometric or health-related info.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-protection">
          <AccordionTrigger>Protection of Personal Data at Mint</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                We implement safeguards including encryption, secure server environments, and limited internal access to protect your information. However, no system is 100% secure, and you use Mint at your own risk.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="children">
          <AccordionTrigger>Children and Personal Data</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                Mint is not intended for children under 18. We do not knowingly collect data from minors. If you are under 18, please do not use Mint or submit personal information.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cookies">
          <AccordionTrigger>Cookies and Other Technologies</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>Mint uses cookies, pixels, and similar technologies to:</p>
              <ul>
                <li>Remember user sessions and preferences</li>
                <li>Track cashback activation and affiliate clicks</li>
                <li>Improve extension performance</li>
                <li>Personalize ads and recommendations</li>
              </ul>
              <p>You can manage cookie preferences in your browser settings or within the extension.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-transfer">
          <AccordionTrigger>Transfer of Personal Data Between Countries</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="commitment">
          <AccordionTrigger>Our Companywide Commitment to Your Privacy</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                We are committed to protecting your privacy and maintaining transparency about our data practices. We regularly review and update our privacy measures to ensure the security of your information.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="questions">
          <AccordionTrigger>Privacy Questions</AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-gray dark:prose-invert">
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@mintcashback.com.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 text-sm text-muted-foreground text-center">
        <p>
          We may update this Privacy Policy at any time. When we do, we'll notify users via email or in the extension. 
          Continued use of Mint means you accept the updated terms.
        </p>
      </div>
    </div>
  );
} 