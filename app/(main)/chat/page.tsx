"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { FaY } from "react-icons/fa6";

export default function Page() {
  const task = useQuery(api.task.get);
  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-background justify-center items-center">
      <div className="flex  items-center justify-center size-10 w-100 h-100 rounded-full bg-primary text-primary-foreground shadow-lg shrink-0">
        <FaY className="size-20" />
      </div>
      {task?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}
