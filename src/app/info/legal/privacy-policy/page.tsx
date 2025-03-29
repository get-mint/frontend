<<<<<<< HEAD
import { Leaf } from "lucide-react";

import { InfoPage } from "@/components/templates/info-page";

const sections = [
  {
    title: "What Is Personal Data at Mint?",
    content: (
      <>
        <p className="mb-4">
          This Privacy Policy ("Policy") explains how Mint Technologies, Inc.
          ("Mint," "we," or "us") collects, uses, and shares information from
          users of our services. Our services include the Mint browser
          extension, mobile applications, and related digital products
          (collectively, the "Services").
        </p>
        <p>
          Please note: if you interact with external websites, retailers, or
          merchants through our Services, their policies will govern your
          experience on their platforms. We are not responsible for their
          privacy practices.
        </p>
      </>
    ),
  },
  {
    title: "Personal Data Mint Collects from You",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Personal Identifiers</h4>
          <p className="mb-2">When you use Mint, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name, email, and password (if you register)</li>
            <li>Your IP address and device/browser details</li>
            <li>A unique user ID tied to your Mint account</li>
            <li>Information from third-party sign-ins (e.g., Google login)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Payment Information</h4>
          <p>
            If you make a purchase, Mint may collect billing information (e.g.,
            name, address, payment method) to process cashback, gift card
            redemptions, or other rewards. Payment data is processed via secure
            third-party providers and is not stored directly by Mint.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Shopping & Usage Data</h4>
          <p className="mb-2">
            When you interact with partner stores, Mint collects:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>URLs and domain names of visited stores</li>
            <li>Product pages viewed</li>
            <li>Items added to carts or purchased</li>
            <li>Coupon codes and cashback activations</li>
            <li>Clickstream behavior (how you navigate our Services)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Inference & Preference Data</h4>
          <p>
            Mint may infer your preferences based on your browsing and
            purchasing history to show better deals, relevant cashback offers,
            or exclusive content.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Your Privacy Rights at Mint",
    content: (
      <>
        <p className="mb-4">
          Mint reserves the right to collect, use, share, or sell user data,
          unless the user explicitly opts out. You may opt out of data sharing
          or selling by adjusting your settings in the Mint extension or by
          contacting support at privacy@mintcashback.com.
        </p>
        <p>
          We comply with applicable laws such as the California Consumer Privacy
          Act (CCPA) and General Data Protection Regulation (GDPR) where
          required.
        </p>
      </>
    ),
  },
  {
    title: "Mint's Sharing of Personal Data",
    content: (
      <>
        <p className="mb-4">We may share your information:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>
            With service providers who help operate Mint (e.g., hosting,
            analytics, payments)
          </li>
          <li>
            With affiliate partners and merchants for cashback tracking and
            commission purposes
          </li>
          <li>
            With third parties for marketing or data monetization (unless you
            opt out)
          </li>
          <li>With authorities when required by law or for legal protection</li>
          <li>With a buyer or successor if Mint is acquired or merged</li>
        </ul>
        <p>
          We do not knowingly sell or share sensitive personal data, such as
          biometric or health-related info.
        </p>
      </>
    ),
  },
  {
    title: "Protection of Personal Data at Mint",
    content: (
      <p>
        We implement safeguards including encryption, secure server
        environments, and limited internal access to protect your information.
        However, no system is 100% secure, and you use Mint at your own risk.
      </p>
    ),
  },
  {
    title: "Children and Personal Data",
    content: (
      <p>
        Mint is not intended for children under 18. We do not knowingly collect
        data from minors. If you are under 18, please do not use Mint or submit
        personal information.
      </p>
    ),
  },
  {
    title: "Cookies and Other Technologies",
    content: (
      <>
        <p className="mb-4">
          Mint uses cookies, pixels, and similar technologies to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Remember user sessions and preferences</li>
          <li>Track cashback activation and affiliate clicks</li>
          <li>Improve extension performance</li>
          <li>Personalize ads and recommendations</li>
        </ul>
      </>
    ),
  },
  {
    title: "Transfer of Personal Data Between Countries",
    content: (
      <p>
        Your information may be transferred to and processed in countries other
        than your own. We ensure appropriate safeguards are in place to protect
        your data during international transfers.
      </p>
    ),
  },
  {
    title: "Our Companywide Commitment to Your Privacy",
    content: (
      <p>
        We are committed to protecting your privacy and maintaining transparency
        about our data practices. We regularly review and update our privacy
        measures to ensure the security of your information.
      </p>
    ),
  },
  {
    title: "Privacy Questions",
    content: (
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, please contact us at privacy@mintcashback.com.
      </p>
    ),
  },
];
=======
import { Leaf, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
>>>>>>> 194d84c (fix: Fixed footer pages)

export default function PrivacyPolicyPage() {
  return (
    <>
      <InfoPage
        title="Privacy Policy"
        icon={Leaf}
        sections={sections}
        className="space-y-4"
      />
    </>
  );
}
