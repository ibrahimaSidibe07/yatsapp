"use server";

import { revalidatePath } from "next/cache";

export async function valider(
  requestId: string,
  myId: string,
  senderId: string,
) {
  if (!requestId || !myId || !senderId) return { error: "Données manquantes" };
  revalidatePath("/all_member");
  return { success: true };
}

export async function reject(requestId: string) {
  if (!requestId) return { error: "ID de demande manquant" };
  revalidatePath("/all_member");
  return { success: true };
}
