"use client";

import { LayoutDashboard } from "lucide-react";

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
      headerTitle="Mint - Admin"
      headerLink="/dashboard"
    />
  );
}
