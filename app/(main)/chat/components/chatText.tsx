"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { getMessagesAction } from "../actions/messageAction";

export default function ChatText() {
    const searchParams = useSearchParams();
    const receiverId = searchParams.get("id");
    const [messages, setMessages] = useState<any[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (receiverId) {
            getMessagesAction("", receiverId).then(setMessages);
        }
    }, [receiverId]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if (!receiverId) return <div className="text-center p-10">Sélectionnez un ami pour discuter</div>;

    return (
        <div className="flex flex-col gap-4 overflow-y-auto noScrollBar pb-20">
            {messages.map((message) => {
                return (
                    <div
                        key={message.id}
                        className={`flex items-start gap-3 max-w-[80%]`}
                    >
                        <div className={`w-8 h-8 rounded-full flex-none bg-blue-500`} />
                        <div className={`flex flex-col`}>
                            <span className="text-xs text-gray-400 mx-1 mb-1">
                                {message.sender?.name} • {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            <div className={`p-3 rounded-2xl bg-[#23232f] rounded-tl-none`}>
                                <p className="text-sm text-white">{message.content}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div ref={scrollRef} />
        </div>
    );
}
