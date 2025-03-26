"use client";

import Link from "next/link";

import { LogIn, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full bg-card/60 backdrop-blur-md shadow-[0_0_50px_-5px_rgba(0,224,143,0.5)] border-[#00E08F]/40">
        <CardHeader>
          <CardTitle className="text-3xl">Something went wrong</CardTitle>
          <CardDescription className="text-lg">
            There was an error confirming your email. This could happen if the
            link has expired or has already been used.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-4">
          <Button variant="outline" asChild className="flex-1">
            <Link href="/auth/login">
              <LogIn className="size-4 mr-2" />
              Log In
            </Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/auth/signup">
              <UserPlus className="size-4 mr-2" />
              Sign Up
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
