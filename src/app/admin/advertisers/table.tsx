"use client";

import { LoaderCircle, Pencil, Trash2 } from "lucide-react";

import { Database } from "@/types/supabase";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

type Advertiser = Database["public"]["Tables"]["advertisers"]["Row"] & {
  network?: { name: string };
  currency?: { acronym: string };
};

interface AdvertisersTableProps {
  advertisers: Advertiser[];
  isLoading: boolean;
  onAdvertiserUpdate: (id: string, active: boolean) => void;
}

export function AdvertisersTable({
  advertisers,
  isLoading,
  onAdvertiserUpdate,
}: AdvertisersTableProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <LoaderCircle className="animate-spin size-8" />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Domain</TableHead>
          <TableHead>Network</TableHead>
          <TableHead>Currency</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {advertisers.map((advertiser) => (
          <TableRow key={advertiser.id}>
            <TableCell>
              {advertiser.image_url && (
                <img
                  src={advertiser.image_url}
                  alt={advertiser.name}
                  className="h-8 w-auto object-contain"
                />
              )}
            </TableCell>
            <TableCell className="font-medium">{advertiser.name}</TableCell>
            <TableCell>{advertiser.domain}</TableCell>
            <TableCell>{advertiser.network?.name || "N/A"}</TableCell>
            <TableCell>{advertiser.currency?.acronym || "N/A"}</TableCell>
            <TableCell>
              <Switch
                checked={advertiser.active}
                onCheckedChange={() =>
                  onAdvertiserUpdate(advertiser.id, advertiser.active)
                }
              />
            </TableCell>
            <TableCell>
              {new Date(advertiser.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="icon">
                  <Pencil className="size-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="size-4 text-red-500" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
