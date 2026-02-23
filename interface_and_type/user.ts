export interface userInterface {
    name: string;
    id: string;
    email: string;
    emailVerified?: boolean;
    image: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}