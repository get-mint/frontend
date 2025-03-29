import { Leaf } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Leaf className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Mint</h1>
      </div>

      <div className="prose prose-gray dark:prose-invert mx-auto">
        <h2 className="text-center mb-8">Legal</h2>

        <div className="flex flex-col items-center space-y-4">
          <Link 
            href="/info/legal/privacy-policy" 
            className="text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/info/legal/terms-of-service" 
            className="text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            href="/info/legal/cookie-policy" 
            className="text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
} 