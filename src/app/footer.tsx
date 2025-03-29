'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Leaf } from "lucide-react";

const footerData = {
  brand: {
    name: "Mint",
    email: "team@getmint.lol",
  },
  sections: [
    {
      title: "Product",
      links: [
        { href: "/download", label: "Download" },
        { href: "#features", label: "Features", isScroll: true },
        { href: "/security", label: "Security" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/info/company/about", label: "About Us" },
        { href: "/info/company/careers", label: "Careers" },
        { href: "/info/company/contact", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/info/legal/privacy-policy", label: "Privacy Policy" },
        { href: "/info/legal/terms-of-service", label: "Terms of Service" },
        { href: "/info/legal/cookie-policy", label: "Cookie Policy" },
      ],
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScroll?: boolean) => {
    e.preventDefault();

    if (isScroll) {
      // If we're not on the home page, first navigate there
      if (pathname !== '/') {
        router.push('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById('features');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // If we're already on the home page, just scroll
        const element = document.getElementById('features');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="border-t bg-background mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">{footerData.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {footerData.brand.email}
            </p>
          </div>

          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href, link.isScroll)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {footerData.brand.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerData.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
