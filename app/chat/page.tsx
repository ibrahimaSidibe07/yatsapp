"use client";
import NotUser from "@/components/notUser";
import { useSession } from "../lib/auth_client";
import ListUsers from "./listUsers";
import TextPage from "./textPage";

export default function Page() {
    const { data } = useSession();
    return (
        <div>
            {data === null ? (
                <NotUser />
            ) : (
                <div className="flex flex-row overflow-hidden ">
                    <div className="w-[35%] h-screen  border-r-2 ">
                        <ListUsers />
                    </div>
                    <div className="w-full  h-screen ">
                        <TextPage />
                    </div>
                </div>
            )}
        </div>
    );
}
