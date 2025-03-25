import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Welcome to Next Supa Shad Boilerplate
        </h1>
        <span className="text-muted-foreground max-w-md">
          A starter template with Next.js, Supabase, and ShadCN UI. Check out
          the README to get started.
        </span>
      </div>

      <div className="flex gap-4">
        <Button asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>
          Need help getting started? Check out the{" "}
          <Link
            href="https://github.com/alexandros-lekkas/next-supa-shad-boilerplate/blob/main/README.md"
            className="underline hover:text-foreground"
          >
            README
          </Link>
        </p>
      </div>
    </div>
  );
}
