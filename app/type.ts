export interface UserInterfaceJSON {
  createdAt: number;
  email: string;
  emailVerified: boolean;
  issuer: string;
  name: string;
  sessionId: string;
  subject: string;
  tokenIdentifier: string;
  updatedAt: number;
}
export interface UserInterface {
  createdAt: number;
  email: string;
  emailVerified: boolean;
  name: string;
  updatedAt: number;
  image?: string;
}
