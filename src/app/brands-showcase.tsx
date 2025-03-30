"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/tailwind";

import { Tables } from "@/types/supabase";

import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BrandCardProps {
  brand: Tables<"advertisers">;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <a
      href={`https://${brand.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card
        className={cn(
          "w-32 h-32 flex items-center justify-center p-4 transition-all duration-300",
          "border-border/20 bg-card/10 backdrop-blur-md",
          "hover:bg-card/20 hover:border-border/30",
          "dark:border-border/20 dark:bg-card/15 dark:hover:bg-card/25 dark:hover:border-border/40",
          "animate-in fade-in duration-500"
        )}
      >
        <img
          src={brand.image_url as string}
          alt={brand.name}
          className="object-contain w-[100px] h-[100px]"
        />
      </Card>
    </a>
  );
}

export function BrandsShowcase() {
  const [brands, setBrands] = useState<Tables<"advertisers">[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBrands() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("advertisers")
        .select("*")
        .neq("image_url", null)
        .neq("image_url", "")
        .limit(10);

      if (error) {
        console.error("Error fetching brands:", error);
        return;
      }

      setBrands(data);
      setIsLoading(false);
    }

    fetchBrands();
  }, []);

  const firstRow = brands.slice(0, brands.length / 2);
  const secondRow = brands.slice(brands.length / 2);

  // Create arrays of 5 skeleton cards for each row
  const skeletonRow = Array(5).fill(null);

  return (
    <section className="w-full">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {isLoading
            ? skeletonRow.map((_, index) => (
                <Skeleton
                  key={`skeleton-1-${index}`}
                  className="w-32 h-32 rounded-lg"
                />
              ))
            : firstRow.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {isLoading
            ? skeletonRow.map((_, index) => (
                <Skeleton
                  key={`skeleton-2-${index}`}
                  className="w-32 h-32 rounded-lg"
                />
              ))
            : secondRow.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
