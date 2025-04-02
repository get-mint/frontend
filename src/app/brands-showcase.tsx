"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

import { Tables } from "@/types/supabase";

import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
export function BrandCard({ brand }: { brand: Tables<"advertisers"> }) {
  return (
    <a
      href={`https://${brand.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="w-32 h-32 flex items-center justify-center p-4 transition-all">
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
        .eq("active", true)
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

  const skeletonRow = Array(5).fill(null);

  return (
    <>
      <Link href="/brands" passHref className="w-full flex justify-center mb-4">
        <Button variant="outline" className="rounded-full py-5 px-8 text-lg">
          <div className="flex flex-row gap-2 items-center">
            View All Brands
            <ArrowRight className="size-6" />
          </div>
        </Button>
      </Link>

      {!isLoading && brands.length < 10 ? null : (
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
      )}
    </>
  );
}
