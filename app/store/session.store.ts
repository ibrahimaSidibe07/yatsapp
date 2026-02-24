// import { create } from "zustand"

// // 1. On définit la structure exacte de l'utilisateur venant de Better Auth
// interface User {
//     id: string;
//     email: string;
//     name: string;
//     image?: string | null;
//     createdAt: Date;
//     updatedAt: Date;
//     emailVerified: boolean;
// }

// interface SessionState {
//     session: any | null; 
//     userName: string;
//     userEmail: string;
//     setSession: (data: { user: User; session: any } | null) => void;
// }

// export const useSessionStore = create<SessionState>((set) => ({
//     session: null,
//     userName: "",
//     userEmail: "",
    
//     setSession: (data) => set({
//         session: data?.session || null,
//         userName: data?.user?.name || "",
//         userEmail: data?.user?.email || ""
//     })
// }))