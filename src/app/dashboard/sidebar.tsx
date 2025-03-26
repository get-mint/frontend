"use client";

import { Leaf, LayoutDashboard } from "lucide-react";
import { AppSidebar } from "@/components/layout/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
];

export function DashboardSidebar() {
  return (
    <AppSidebar
      items={items}
      headerIcon={Leaf}
      headerTitle="Mint"
      headerLink="/dashboard"
    />
  );
}
