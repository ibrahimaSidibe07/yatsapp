import { userInterface } from "@/interface_and_type/user";
import { InputButtonGroup } from "./components/searchInput";
import UserIcon from "./components/userIcon";
export default function ListUsers({ user }: { user: userInterface[] }) {
    return (
        <div className="flex flex-col h-full bg-background/50">
            <div className="p-4 border-b">
                <InputButtonGroup />
            </div>

            <div className="flex-1 overflow-y-auto noScrollBar py-2">
                {user.length > 0 ? (
                    user.map(data => (
                        <div key={data.id} className="px-2">
                            <UserIcon
                                image={data.image as string}
                                name={data.name}
                                offlineTime="connecte il y a 12 H"
                                className="hover:bg-secondary/50 rounded-xl px-2 cursor-pointer"
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground p-10 text-sm">Aucun ami trouvé.</p>
                )}
            </div>
        </div>
    );
}

