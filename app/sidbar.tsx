import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export default async function SideBar({ children }: { children: React.ReactNode }) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <SidebarProvider>
            <AppSidebar user={session?.user} />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
