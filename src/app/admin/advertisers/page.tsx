"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, Pencil, Trash2, Search } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/lib/hooks/use-auth";
import { Database } from "@/types/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { AddNewAdvertiser } from "./add-new-advertiser";

type Advertiser = Database["public"]["Tables"]["advertisers"]["Row"] & {
  network?: { name: string };
  currency?: { acronym: string };
};

const ITEMS_PER_PAGE = 10;

export default function AdvertisersPage() {
  const { isAuthenticated } = useAuth();
  const [advertisers, setAdvertisers] = useState<Advertiser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAdvertisers = async () => {
      setIsLoading(true);
      const supabase = createClient();

      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE - 1;

      let query = supabase
        .from("advertisers")
        .select(`
          *,
          network: networks(name),
          currency: currencies(acronym)
        `, { count: "exact" });

      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,domain.ilike.%${searchQuery}%`);
      }

      const { data, count, error } = await query
        .range(start, end)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching advertisers:", error);
        return;
      }

      setAdvertisers(data || []);
      setTotalPages(Math.ceil((count || 0) / ITEMS_PER_PAGE));
      setIsLoading(false);
    };

    if (isAuthenticated) {
      fetchAdvertisers();
    }
  }, [isAuthenticated, currentPage, searchQuery]);

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("advertisers")
      .update({ active: !currentActive })
      .eq("id", id);

    if (error) {
      console.error("Error updating advertiser:", error);
      return;
    }

    setAdvertisers((prev) =>
      prev.map((advertiser) =>
        advertiser.id === id
          ? { ...advertiser, active: !currentActive }
          : advertiser
      )
    );
  };

  if (!isAuthenticated) {
    return <div>Please log in to access this page.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Advertisers</h1>
        <AddNewAdvertiser />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Advertisers</CardTitle>
          <CardDescription>
            View and manage all advertisers in the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search advertisers..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <LoaderCircle className="animate-spin size-8" />
            </div>
          ) : (
            <div className="space-y-4">
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
                      <TableCell className="font-medium">
                        {advertiser.name}
                      </TableCell>
                      <TableCell>{advertiser.domain}</TableCell>
                      <TableCell>{advertiser.network?.name || "N/A"}</TableCell>
                      <TableCell>{advertiser.currency?.acronym || "N/A"}</TableCell>
                      <TableCell>
                        <Switch
                          checked={advertiser.active}
                          onCheckedChange={() =>
                            handleToggleActive(advertiser.id, advertiser.active)
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

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 