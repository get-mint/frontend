"use client";

import { Leaf, LayoutDashboard } from "lucide-react";
import { AppSidebar } from "@/components/layout/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
];

export function AdminSidebar() {
  return (
    <AppSidebar
      items={items}
      headerIcon={Leaf}
      headerTitle="Mint - Admin"
      headerLink="/dashboard"
    />
  );
}
