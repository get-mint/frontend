"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, ArrowLeft, RefreshCcw, LogIn } from "lucide-react";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="max-w-md w-full bg-card/60 backdrop-blur-md">
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
