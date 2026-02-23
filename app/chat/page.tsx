import { MoreVertical, PhoneCall, VideoIcon } from "lucide-react";
import UserIcon from "./components/userIcon";
import ChatText from "./components/chatText";
import { ChatButton } from "./components/chatIButton";

export default function Page() {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className="h-15 border-b-2 pl-10 flex flex-row ">
                    <UserIcon name="name" />
                    <div className="w-40 ml-auto flex flex-row gap-3 my-auto">
                        <VideoIcon />
                        <PhoneCall />
                        <MoreVertical />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between  p-5">
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        <ChatText />
                    </div>

                    <div className="w-full flex justify-center pb-4">
                        <div className="w-full max-w-2xl">
                            <ChatButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
