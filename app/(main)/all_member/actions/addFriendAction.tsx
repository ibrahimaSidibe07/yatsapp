"use server";
import { revalidatePath } from "next/cache";

export async function addFriendAction(myID: string, targetID: string) {
    if (!myID || !targetID) return { error: "Identifiants manquants" };
    if (myID === targetID) return { error: "Vous ne pouvez pas vous ajouter vous-même" };
    revalidatePath("/all_member");
    return { success: true };
}
