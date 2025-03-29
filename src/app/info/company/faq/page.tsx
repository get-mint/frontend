import { Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Mint</h1>
        </div>
        <h2 className="text-base font-normal text-muted-foreground">FAQ (Frequently Asked Questions)</h2>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="what-is-mint" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            What is Mint?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Mint is a free browser extension for students that gives you real cashback or gift cards when you shop online using our affiliate links.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-does-mint-make-money" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            How does Mint make money?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>We earn a commission from brands when you shop through our links. Then we split that 50/50 with you — real cash, no coins or points.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mint-points" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Do I earn Mint points or credits?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>No. We don't use points. You get paid in actual money or digital gift cards.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="get-started" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Just install the Mint extension, sign up, and shop as usual. Mint will activate when deals are available.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="browser-support" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            What browsers support Mint?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Mint works on Chrome, Safari (Mac only), and Microsoft Edge. Firefox is coming soon.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mobile-support" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Can I use Mint on my phone?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>You can access the Mint website and track rewards on your phone, but the extension itself does not work on mobile browsers.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mint-working" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            How do I know Mint is working?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>You'll see the Mint icon turn green or a notification pop up when cashback is available on the site you're shopping.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payment-methods" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            How do I get paid?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Via PayPal, Venmo, or gift cards (Amazon, Target, Starbucks, etc.). You choose your payout in your Mint dashboard.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cashback-timing" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            When will my cashback appear?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Your purchase shows as "pending" in 24–72 hours. Once approved, your funds will be ready to withdraw within 3 days.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="minimum-withdrawal" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Is there a minimum withdrawal amount?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Yes — $5. You can cash out once your available balance hits that amount.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="stacking-discounts" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Can I stack Mint with other discounts?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Yes! You can often combine Mint with student discounts, coupons, and seasonal deals — we'll let you know if something conflicts.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="is-mint-free" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Is Mint free to use?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Yes. Mint is completely free. No hidden fees, no subscriptions, no upsells.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="login-frequency" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Do I need to log in every time I shop?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>No. Just log in once — Mint stays active as long as you're signed in.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="missing-cashback" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Why didn't I get cashback?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p className="mb-4">Check that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mint was active</li>
              <li>You didn't use another cashback tool</li>
              <li>You didn't clear cookies</li>
              <li>You were logged in</li>
            </ul>
            <p className="mt-4">Still missing cashback? Email support@mintcashback.com and we'll fix it.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="referral-program" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Can I refer friends to Mint?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Yes! Invite friends and earn bonus cash when they sign up and make a qualifying purchase.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-safety" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Is my data safe?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Yes. Mint does not sell or share your data. We only track purchase-related activity to confirm your rewards.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="student-email" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Do I need a student email to use Mint?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>No, but you may need one to access student-exclusive perks and deals.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="supported-stores" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            What stores does Mint support?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>Hundreds — including Amazon, ASOS, Apple (edu), Nike, Sephora, and more. The list keeps growing.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="other-tools" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            Can I use Mint with other cashback tools like Rakuten?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <p>We don't recommend it. Using multiple tools may cancel out your rewards. Stick with Mint during checkout for best results.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contact-support" className="border-b">
          <AccordionTrigger className="text-xl font-medium hover:no-underline">
            How do I contact support?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pt-4">
            <div className="space-y-2">
              <p>📧 Email: support@mintcashback.com</p>
              <p>📸 Instagram: @mint.cashback</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 