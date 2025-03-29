import { Leaf } from "lucide-react";
import { InfoPage } from "@/components/templates/info-page";

const sections = [
  {
    title: "Ownership of Site; Agreement to Terms of Use",
    content: (
      <div className="space-y-4">
        <p>
          These Terms and Conditions of Use ("Terms of Use") apply to the Mint
          website located at www.getmint.lol and all associated platforms,
          including the Mint browser extension and mobile application
          (collectively, the "Site"). The Site is the property of Mint
          Technologies LLC ("Mint") and its licensors. BY USING THE SITE, YOU
          AGREE TO THESE TERMS OF USE; IF YOU DO NOT AGREE, DO NOT USE THE SITE.
        </p>
        <p>
          Mint reserves the right, at its sole discretion, to change, modify,
          add, or remove portions of these Terms of Use at any time. It is your
          responsibility to check these Terms periodically for changes. Your
          continued use of the Site following the posting of changes will mean
          that you accept and agree to the changes.
        </p>
        <p>
          As long as you comply with these Terms, Mint grants you a personal,
          non-exclusive, non-transferable, limited privilege to access and use
          the Site.
        </p>
      </div>
    ),
  },
  {
    title: "Affiliate Marketing Disclaimer",
    content: (
      <p>
        Mint earns affiliate commissions through links and coupons offered via
        our browser extension and website. When you interact with an offer or
        make a purchase through a linked retailer, we may earn a commission.
        While we strive to provide accurate and helpful discounts, we do not
        guarantee that our coupons or offers will always be the best or most
        up-to-date.
      </p>
    ),
  },
  {
    title: "Content",
    content: (
      <p>
        All content—including but not limited to text, graphics, logos, icons,
        images, audio clips, data compilations, and software—on this Site is
        owned or licensed by Mint and is protected by U.S. and international
        copyright, trademark, and other intellectual property laws. No part of
        the Site may be copied, republished, distributed, or exploited for
        commercial purposes without Mint's prior written consent.
      </p>
    ),
  },
  {
    title: "Use of the Site",
    content: (
      <div className="space-y-4">
        <p>
          You may not use the Site or any services offered through the Site for
          any unlawful purpose. Specifically, you agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Attempt unauthorized access to any part of the Site.</li>
          <li>
            Use bots, scrapers, spiders, or other automated tools to access the
            Site.
          </li>
          <li>
            Engage in fraudulent activity, including artificial interactions
            with affiliate links.
          </li>
          <li>
            Interfere with the operation of the Site or any user experience.
          </li>
          <li>
            Impersonate any person or misrepresent your affiliation with Mint.
          </li>
        </ul>
        <p>
          Mint reserves the right to block any activity that we believe is
          harmful, abusive, or unlawful.
        </p>
      </div>
    ),
  },
  {
    title: "Accounts, Passwords, and Security",
    content: (
      <p>
        To use certain features of the Site, you may be required to create an
        account. You are solely responsible for maintaining the confidentiality
        of your account information. You agree to notify Mint immediately of any
        unauthorized use of your account or other security breaches.
      </p>
    ),
  },
  {
    title: "Privacy",
    content: (
      <p>
        Your use of the Site is also subject to our Privacy Policy. By using the
        Site, you consent to the collection, use, and disclosure of your
        personal data as described therein.
      </p>
    ),
  },
  {
    title: "External Links and Third-Party Retailers",
    content: (
      <p>
        The Site may link to third-party retailer sites. Mint does not control
        or endorse these sites and is not responsible for their content,
        services, or practices. Your interactions with third-party sites are
        governed by their own terms and privacy policies.
      </p>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <p className="font-medium">
        MINT MAKES NO WARRANTIES REGARDING THE FUNCTIONALITY, ACCURACY, OR
        RELIABILITY OF THE SITE OR THE EXTENSION. THE SITE IS PROVIDED ON AN
        "AS-IS" AND "AS-AVAILABLE" BASIS. YOU USE THE SITE AT YOUR OWN RISK.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p className="font-medium">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MINT WILL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR
        LOSS OF PROFITS OR DATA, ARISING OUT OF YOUR USE OF THE SITE.
      </p>
    ),
  },
  {
    title: "Indemnity",
    content: (
      <p>
        You agree to indemnify and hold harmless Mint, its officers, employees,
        affiliates, and partners from any claims, losses, damages, liabilities,
        including legal fees, arising out of your misuse of the Site or
        violation of these Terms.
      </p>
    ),
  },
  {
    title: "Termination",
    content: (
      <p>
        Mint reserves the right to terminate or suspend your access to the Site,
        without notice, for conduct that violates these Terms or is otherwise
        harmful to Mint's interests.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of the State of New Mexico, USA,
        without regard to conflict of laws principles. You agree that any legal
        action or proceeding between you and Mint will be brought exclusively in
        a court of competent jurisdiction in New Mexico.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <p>
        For questions or concerns, contact us at:
        <br />
        Email: team@getmint.lol
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <InfoPage
      title="Terms of Service"
      icon={Leaf}
      sections={sections}
      className="prose prose-gray dark:prose-invert mx-auto"
    />
  );
}
