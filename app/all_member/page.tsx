import prisma from "../lib/prisma";
import ListAllUsers from "./listAllUsers";

export default async function ListUsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { name: "asc" },
    });

    return (
        <div className="h-full text-white flex flex-col">
            <ListAllUsers users={users} />
        </div>
    );
}
