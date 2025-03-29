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
<<<<<<< HEAD
    <InfoPage
      title="Terms of Service"
      icon={Leaf}
      sections={sections}
      className="prose prose-gray dark:prose-invert mx-auto"
    />
=======
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mint</h1>
          </div>
          <h2 className="text-base font-normal">Terms and Conditions of Use</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Please read these terms carefully before using Mint's services. By using our platform, you agree to these terms and conditions.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing or using Mint's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cashback Program</h2>
          <p className="text-muted-foreground mb-4">
            Our cashback rates and rewards may vary and are subject to change. Cashback is earned on qualifying purchases only. We reserve the right to:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Modify cashback rates</li>
            <li>Determine qualifying purchases</li>
            <li>Adjust or reverse cashback for returns or fraudulent activity</li>
            <li>Set minimum payout thresholds</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
          <p className="text-muted-foreground mb-4">
            Users must not:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Use automated systems to interact with our service</li>
            <li>Attempt to manipulate cashback or rewards</li>
            <li>Engage in fraudulent activity</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Liability</h2>
          <p className="text-muted-foreground">
            Mint is not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services. This includes technical issues, merchant relationships, or cashback tracking errors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Account Security</h2>
          <p className="text-muted-foreground">
            You are responsible for maintaining the security of your account credentials. Notify us immediately if you suspect unauthorized access to your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-muted-foreground">
            We reserve the right to suspend or terminate your access to Mint's services at our discretion, particularly in cases of suspected fraud or violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground">
            We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:team@getmint.lol" className="text-primary hover:underline">
              team@getmint.lol
            </a>
          </p>
        </section>
      </div>
    </div>
>>>>>>> 194d84c (fix: Fixed footer pages)
  );
}
