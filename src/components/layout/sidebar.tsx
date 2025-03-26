"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

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

interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface AppSidebarProps {
  items: SidebarItem[];
  headerIcon: LucideIcon;
  headerTitle: string;
  headerLink: string;
  headerClassName?: string;
}

export function AppSidebar({
  items,
  headerIcon: HeaderIcon,
  headerTitle,
  headerLink,
  headerClassName = "bg-muted",
}: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href={headerLink} passHref legacyBehavior>
              <SidebarMenuButton className={`${headerClassName} py-6 px-4 text-lg transition-all duration-150 cursor-pointer`}>
                <HeaderIcon className="h-5 w-5" />
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url} passHref legacyBehavior>
                    <SidebarMenuButton
                      className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary py-5 px-4 text-lg transition-all duration-150 cursor-pointer"
                      data-active={pathname === item.url}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-base">{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
} 