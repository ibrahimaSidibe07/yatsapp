import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar className="" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
