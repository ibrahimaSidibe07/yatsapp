"use client";

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { FaY } from "react-icons/fa6";
import { MdChat, MdOutlineVideoCameraBack } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { PhoneCall, User2Icon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { AvatarWithBadge } from "@/app/chat/components/avatarWithBadge";
import { usePathname } from "next/navigation";
import { profileNameAb } from "@/functions/string_function";
interface userType {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
}
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    user?: userType | undefined | null;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
    return (
        <Sidebar {...props}>
            <SidebarHeader className="flex flex-col items-center">
                <div className="border-2 border-primary/50 rounded-2xl w-20 p-3 text-center bg-secondary/35 backdrop-blur-2xl">
                    <FaY />
                    atsapp
                </div>
            </SidebarHeader>
            <SidebarContent className="flex flex-col ">
                <div className="flex flex-col gap-1">
                    <SideBarIcon routeName="chat">
                        <MdChat size={25} />
                        <h1>chat</h1>
                    </SideBarIcon>
                    <SideBarIcon routeName="stories">
                        <MdOutlineVideoCameraBack size={25} />
                        <h1>stories</h1>
                    </SideBarIcon>
                    <SideBarIcon routeName="all_mumber">
                        <UsersIcon size={25} />
                        <h1>all mumber</h1>
                    </SideBarIcon>
                    <SideBarIcon routeName="groupe">
                        <RiGroupLine size={25} />
                        <h1>groupe</h1>
                    </SideBarIcon>
                    <SideBarIcon routeName="call">
                        <PhoneCall size={25} />
                        <h1>call</h1>
                    </SideBarIcon>
                </div>
                <div className="flex mt-auto flex-col gap-1 mb-3">
                    {!user ? (
                        <SideBarIcon routeName="login">
                            <User2Icon size={25} />
                            <h1>se connecter</h1>
                        </SideBarIcon>
                    ) : (
                        <SideBarIcon routeName="profile">
                            <AvatarWithBadge image={`${user?.image}`} CN={`${profileNameAb(user?.name as string)}`} />
                            <h1 className="mt-2">profile</h1>
                        </SideBarIcon>
                    )}{" "}
                </div>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
export function SideBarIcon({
    children,
    routeName,
    className,
}: {
    children: React.ReactNode;
    routeName: string;
    className?: string;
}) {
    const pathname = usePathname();
    return (
        <Link
            href={`/${routeName}`}
            className={` flex flex-row gap-3 mx-auto  border-primary/45 ${className}  ${pathname === `/${routeName}` ? "border-2 bg-secondary/35 backdrop-blur-2xl" : ""} rounded-xl w-[90%] p-2  [&>h1]:text-md `}>
            {children}
        </Link>
    );
}
