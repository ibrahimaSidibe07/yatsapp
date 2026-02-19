"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowBigLeftDash } from "lucide-react";
import { useRouter } from "next/navigation";

function Profile() {
    const router = useRouter();
    return (
        <div>
            <div className="max-w-[80%] mx-auto mt-5">
                <Card>
                    <CardHeader>
                        <div className="flex w-full">
                            <Button onClick={() => router.back()} variant={"ghost"}>
                                <ArrowBigLeftDash className="group-hover:scale-125 " />
                            </Button>
                            <h1 className="text-center text-primary flex-1">profile</h1>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}

export default Profile;
