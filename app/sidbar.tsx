import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BottomNav } from "@/components/bottom-nav";

import { preloadAuthQuery } from "@/lib/auth-server";
import { api } from "@/convex/_generated/api";
import { UserInterfaceJSON } from "./type";

export default async function SideBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await preloadAuthQuery(api.auth.getCurrentUser);
  const raw = session._valueJSON as unknown as UserInterfaceJSON;

  const user = {
    name: raw.name,
    email: raw.email,
    emailVerified: raw.emailVerified,
    sessionId: raw.sessionId,
  };
  console.log(user);

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <BottomNav />
      <SidebarInset className="pb-16 md:pb-0 overflow-hidden flex flex-col min-w-0 w-full">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
