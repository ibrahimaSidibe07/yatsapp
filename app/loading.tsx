import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col h-full w-full bg-[#0c0c11] p-6 space-y-6">
            {/* Squelette du Header de page */}
            <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full bg-white/5" />
                <Skeleton className="h-6 w-40 bg-white/5" />
            </div>

            {/* Corps de la page */}
            <Skeleton className="flex-1 w-full rounded-2xl bg-white/5" />

            <div className="flex gap-4">
                <Skeleton className="h-20 flex-1 rounded-xl bg-white/5" />
                <Skeleton className="h-20 flex-1 rounded-xl bg-white/5" />
            </div>
        </div>
    );
}
