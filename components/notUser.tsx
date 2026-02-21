import { MdErrorOutline } from "react-icons/md";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NotUser() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <MdErrorOutline size={400} className="text-primary/40" />
            <div className="flex gap-3 ">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Login please</h4>
                <Button>
                    <Link href={"/login"}>login</Link>
                </Button>
            </div>
        </div>
    );
}
