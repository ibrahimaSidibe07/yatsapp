"use server";
import prisma from "../lib/prisma";
import ListUsers from "./listUsers";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const users = await prisma.user.findMany();

    return (
        <div className="flex flex-row overflow-hidden ">
            <div className="w-[35%] h-screen  border-r-2 ">
                <ListUsers user={users} />
            </div>
            <div className="w-full  h-screen ">{children}</div>
        </div>
    );
}
