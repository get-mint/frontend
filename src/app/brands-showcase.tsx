"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

import { Tables } from "@/types/supabase";

import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";

export function BrandsShowcase() {
  const [brands, setBrands] = useState<Tables<"advertisers">[]>([]);

  useEffect(() => {
    async function fetchBrands() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("advertisers")
        .select("*")
        .not("image_url", "is", null)
        .limit(10);

      if (error) {
        console.error("Error fetching brands:", error);
        return;
      }

      setBrands(data);
    }

    fetchBrands();
  }, []);

  return brands.length > 0 && (
    <section className="w-full py-12">
      <Marquee pauseOnHover>
        {brands.map((brand) => (
          <a
            key={brand.id}
            href={`https://${brand.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="w-32 h-32 flex items-center justify-center p-4 hover:bg-accent transition-colors">
              <img
                src={brand.image_url as string}
                alt={brand.name}
                className="object-contain w-[100px] h-[100px]"
              />
            </Card>
          </a>
        ))}
      </Marquee>
    </section>
  );
}
