import { Leaf } from "lucide-react";

import { InfoPage } from "@/components/templates/info-page";

const sections = [
  {
    title: "Our Vision",
    content: (
      <p>
        At Mint, we're revolutionizing the way people save money while shopping
        online. Our vision is to make every purchase more rewarding by
        automatically finding and applying the best cashback rates and discount
        codes.
      </p>
    ),
  },
  {
    title: "Our Story",
    content: (
      <p>
        Born from the frustration of missing out on savings and the complexity
        of existing cashback platforms, Mint provides a seamless, automated
        solution that works in the background while you shop. We believe that
        everyone should have access to the best deals without the hassle of
        searching for them.
      </p>
    ),
  },
  {
    title: "Our Technology",
    content: (
      <p>
        Our browser extension uses advanced technology to instantly identify
        savings opportunities and automatically applies them at checkout. No
        more copying and pasting coupon codes or remembering to activate
        cashback - Mint handles it all for you.
      </p>
    ),
  },
  {
    title: "Our Promise",
    content: (
      <p>
        We're committed to transparency, security, and maximizing savings for
        our users. Every feature we build and every partnership we forge is
        focused on delivering more value to our community of smart shoppers.
      </p>
    ),
  },
];

export default function AboutPage() {
  return <InfoPage title="About Us" icon={Leaf} sections={sections} />;
}
