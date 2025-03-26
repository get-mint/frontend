"use client";

import { useRouter } from "next/navigation";

import { ArrowLeft, LogIn } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full bg-card/60 backdrop-blur-md shadow-[0_0_50px_-5px_rgba(0,224,143,0.5)] border-[#00E08F]/40">
        <CardHeader>
          <CardTitle className="text-3xl">Access Denied</CardTitle>
          <CardDescription className="text-lg">
            You don't have permission to access this page.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-row gap-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="flex-1"
          >
            <ArrowLeft className="size-4" />
            Go Back
          </Button>
          <Button
            onClick={() => router.push("/auth/login")}
            variant="outline"
            className="flex-1"
          >
            <LogIn className="size-4" />
            Log In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
