"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full bg-card/60 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-3xl">404 - Page Not Found</CardTitle>
          <CardDescription className="text-lg">
            The page you're looking for doesn't exist or has been moved.
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
            onClick={() => router.push("/")}
            variant="outline"
            className="flex-1"
          >
            <Home className="size-4" />
            Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 