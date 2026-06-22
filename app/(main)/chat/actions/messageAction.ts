"use server";

import { revalidatePath } from "next/cache";

export async function sendMessageAction(senderId: string, receiverId: string, content: string) {
    if (!content.trim()) return { error: "Message vide" };
    revalidatePath("/chat");
    return { success: true, message: {} };
}

export async function getMessagesAction(user1Id: string, user2Id: string) {
    return [];
}
