"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, LucideIcon, Settings } from "lucide-react";
import type { ReactElement } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SettingsDialog } from "@/components/settings-dialog";

interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
  component?: () => ReactElement;
}

export function AppSidebar({
  items,
  headerTitle,
  headerLink,
}: {
  items: SidebarItem[];
  headerTitle: string;
  headerLink: string;
}) {
  const pathname = usePathname();

  const allItems = [
    ...items,
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      component: SettingsDialog,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href={headerLink} passHref legacyBehavior>
              <SidebarMenuButton className="bg-muted py-6 px-4 text-lg transition-all duration-150 cursor-pointer">
                <Leaf className="h-5 w-5" />
                <span className="text-base font-semibold">{headerTitle}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {allItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.component ? (
                    <item.component />
                  ) : (
                    <Link href={item.url} passHref legacyBehavior>
                      <SidebarMenuButton
                        className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary py-5 px-4 text-lg transition-all duration-150 cursor-pointer"
                        data-active={pathname === item.url}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-base">{item.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
