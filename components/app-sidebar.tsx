"use client";

import * as React from "react";

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { FaY } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";
import { MdAmpStories, MdChat, MdOutlineVideoCameraBack } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { PhoneCall, Settings2, User2Icon, UserCircle } from "lucide-react";
import Link from "next/link";
import { useSession } from "@/app/lib/auth_client";

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#",
                },
                {
                    title: "Project Structure",
                    url: "#",
                },
            ],
        },
        {
            title: "Building Your Application",
            url: "#",
            items: [
                {
                    title: "Routing",
                    url: "#",
                },
                {
                    title: "Data Fetching",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Rendering",
                    url: "#",
                },
                {
                    title: "Caching",
                    url: "#",
                },
                {
                    title: "Styling",
                    url: "#",
                },
                {
                    title: "Optimizing",
                    url: "#",
                },
                {
                    title: "Configuring",
                    url: "#",
                },
                {
                    title: "Testing",
                    url: "#",
                },
                {
                    title: "Authentication",
                    url: "#",
                },
                {
                    title: "Deploying",
                    url: "#",
                },
                {
                    title: "Upgrading",
                    url: "#",
                },
                {
                    title: "Examples",
                    url: "#",
                },
            ],
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#",
                },
                {
                    title: "File Conventions",
                    url: "#",
                },
                {
                    title: "Functions",
                    url: "#",
                },
                {
                    title: "next.config.js Options",
                    url: "#",
                },
                {
                    title: "CLI",
                    url: "#",
                },
                {
                    title: "Edge Runtime",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#",
                },
                {
                    title: "Fast Refresh",
                    url: "#",
                },
                {
                    title: "Next.js Compiler",
                    url: "#",
                },
                {
                    title: "Supported Browsers",
                    url: "#",
                },
                {
                    title: "Turbopack",
                    url: "#",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data, error } = useSession();

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
                    {data === null ? (
                        <SideBarIcon routeName="login">
                            <User2Icon size={25} />
                            <h1>Settings</h1>
                        </SideBarIcon>
                    ) : (
                        <SideBarIcon routeName="profile">
                            <User2Icon size={25} />
                            <h1>Settings</h1>
                        </SideBarIcon>
                    )}{" "}
                    <SideBarIcon routeName="settings">
                        <Settings2 size={25} />
                        <h1>Settings</h1>
                    </SideBarIcon>
                </div>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
export function SideBarIcon({ children, routeName }: { children: React.ReactNode; routeName: string }) {
    return (
        <Link
            href={`/${routeName}`}
            className="flex flex-row gap-3 mx-auto focus:border-2 focus:bg-secondary/35 focus:backdrop-blur-2xl border-primary/45 rounded-xl w-[90%] p-2  [&>h1]:text-md">
            {children}
        </Link>
    );
}
