import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface avatarType {
    image: string;
}
export function AvatarWithBadge({ image }: avatarType) {
    return (
        <Avatar className="w-10 h-10">
            <AvatarImage src={`${image}`} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>
    );
}
