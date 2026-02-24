import { AvatarWithBadge } from "./avatarWithBadge";
interface inconeType {
    name: string;
    description?: string;
    offlineTime?: string;
}

export default function UserIcon({ name, description, offlineTime }: inconeType) {
    return (
        <div>
            <div className="flex flex-row gap-3 my-3">
                <AvatarWithBadge image="https://github.com/shadcn.png" />
                <div className="flex flex-row w-full">
                    <div>
                        <p className="text-lg font-bold text-primary">{name}</p>
                        <p className="text-sm text-white/40">{description}</p>
                    </div>
                    <div className="ml-auto mt-auto w-40 text-sm flex flex-row gap-1 ">
                        <p>{offlineTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
