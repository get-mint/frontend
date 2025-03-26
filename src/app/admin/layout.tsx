"use client";

import { AdminSidebar } from "./sidebar";
import { AppLayout } from "@/components/layout/app-layout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout
      sidebar={<AdminSidebar />}
      rootPath="/admin"
      rootLabel="Dashboard"
    >
      {children}
    </AppLayout>
  );
}
