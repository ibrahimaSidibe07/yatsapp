import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export function AlertDestructive({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <Alert variant="destructive" className="max-w-md">
            <AlertCircleIcon />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
}
