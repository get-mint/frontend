"use client";

import { Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function SettingsDialog() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuButton
          className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary py-5 px-4 text-lg transition-all duration-150 cursor-pointer"
          data-active={pathname === "/settings"}
        >
          <Settings className="h-5 w-5" />
          <span className="text-base">Settings</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between py-4">
          <div className="space-y-0.5">
            <h2 className="text-base font-medium">Theme</h2>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark mode
            </p>
          </div>
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
} 