"use client";

import { LayoutDashboard, Building2 } from "lucide-react";

import { AppSidebar } from "@/components/layout/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Advertisers",
    url: "/admin/advertisers",
    icon: Building2,
  },
];

export function AdminSidebar() {
  return (
    <AppSidebar
      items={items}
      headerTitle="Mint - Admin"
      headerLink="/dashboard"
    />
  );
}
