"use client";

import { DashboardSidebar } from "./sidebar";
import { AppLayout } from "@/components/layout/app-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout
      sidebar={<DashboardSidebar />}
      rootPath="/dashboard"
      rootLabel="Dashboard"
    >
      {children}
    </AppLayout>
  );
}
