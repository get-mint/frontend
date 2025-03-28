import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Legal</h1>
        <div className="space-y-6">
          <Link 
            href="/info/legal/privacy-policy" 
            className="block text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/info/legal/terms-of-service" 
            className="block text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            href="/info/legal/cookie-policy" 
            className="block text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
} 