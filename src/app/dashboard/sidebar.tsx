"use client";

import { LayoutDashboard } from "lucide-react";

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
    <AppSidebar items={items} headerTitle="Mint" headerLink="/dashboard" />
  );
}
