import { Suspense } from "react";
import prisma from "../lib/prisma";
import ListUsers from "./listUsers";
import { Skeleton } from "@/components/ui/skeleton";

async function UsersListContent() {
    const users = await prisma.user.findMany({
        take: 50,
    });
    return <ListUsers user={users} />;
}

function UsersListFallback() {
    return (
        <div className="flex flex-col p-4 space-y-4">
            <Skeleton className="h-10 w-full rounded-md" />
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-4 flex-1" />
                </div>
            ))}
        </div>
    );
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-row w-full h-full overflow-hidden bg-background">
            <div className="hidden md:block md:w-[320px] lg:w-[380px] xl:w-[420px] 2xl:w-[480px] h-screen border-r shrink-0 overflow-hidden">
                <Suspense fallback={<UsersListFallback />}>
                    <UsersListContent />
                </Suspense>
            </div>
            <div className="flex-1 h-screen overflow-hidden relative">
                {children}
            </div>
        </div>
    );
}
