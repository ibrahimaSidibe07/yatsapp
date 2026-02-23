import { profileNameAb } from "@/functions/string_function";
import { AvatarWithBadge } from "./avatarWithBadge";
interface inconeType {
    name: string;
    description?: string;
    offlineTime?: string;
    image?: string | null;
}

export default function UserIcon({ name, offlineTime, image }: inconeType) {
    return (
        <div>
            <div className="flex flex-row gap-3 my-3">
                <AvatarWithBadge CN={profileNameAb(name)} image={`${image}`} />
                <div className="flex flex-row w-full">
                    <div>
                        <p className="text-lg font-bold text-primary">{name}</p>
                    </div>
                    <div className="ml-auto mt-auto w-40 text-sm flex flex-row gap-1 ">
                        <p>{offlineTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
