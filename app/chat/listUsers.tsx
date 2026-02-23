import { InputButtonGroup } from "./components/searchInput";
import UserIcon from "./components/userIcon";
interface userInterface {
    name: string;
    id: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export default function ListUsers({ user }: { user: userInterface[] }) {
    return (
        <div>
            <div className="flex flex-col">
                <div className=" pb-5 border-b-2 px-2 h-25">
                    <InputButtonGroup />
                </div>

                <div className="p-2 overflow-y-scroll h-screen py-5  noScrollBar ">
                    {user.map(data => (
                        <UserIcon
                            key={data.id}
                            image={data.image as string}
                            name={data.name}
                            offlineTime="connecte il y a 12 H"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
