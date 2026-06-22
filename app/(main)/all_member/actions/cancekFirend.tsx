"use server";
import { revalidatePath } from "next/cache";

export async function cencelFriend(myID: string, targetID: string) {
    if (!myID || !targetID) return { error: "Identifiants manquants" };
    revalidatePath("/all_member");
    return { success: true };
}
