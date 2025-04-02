"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Tables } from "@/types/supabase";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Leaf } from "lucide-react";

const ITEMS_PER_PAGE = 20;

export default function BrandsPage() {
  const [brands, setBrands] = useState<Tables<"advertisers">[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastBrandRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    async function fetchBrands() {
      setIsLoading(true);
      const supabase = createClient();

      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE - 1;

      const { data, error } = await supabase
        .from("advertisers")
        .select("*")
        .neq("image_url", null)
        .neq("image_url", "")
        .eq("active", true)
        .range(start, end)
        .order("name");

      if (error) {
        console.error("Error fetching brands:", error);
        return;
      }

      if (data) {
        setBrands((prev) => (page === 1 ? data : [...prev, ...data]));
        setHasMore(data.length === ITEMS_PER_PAGE);
      }
      setIsLoading(false);
    }

    fetchBrands();
  }, [page]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Our Brands</h1>
        </div>
        <p className="text-base text-muted-foreground">
          Discover all the brands you can earn rewards from
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            ref={index === brands.length - 1 ? lastBrandRef : undefined}
          >
            <a
              href={`https://${brand.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="w-full aspect-square flex items-center justify-center p-6 transition-all hover:shadow-lg">
                <img
                  src={brand.image_url as string}
                  alt={brand.name}
                  className="object-contain w-[150px] h-[150px]"
                />
              </Card>
            </a>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <Skeleton key={index} className="w-full aspect-square" />
          ))}
        </div>
      )}
    </div>
  );
}
