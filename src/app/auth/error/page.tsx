"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-2xl font-bold">Something went wrong</h1>
              <p className="text-balance text-muted-foreground">
                There was an error confirming your email. This could happen if the link has expired or has already been used.
              </p>
              <div className="flex flex-col gap-2 w-full">
                <Button asChild className="w-full">
                  <a href="/auth/login">Try logging in</a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="/auth/signup">Try signing up again</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 