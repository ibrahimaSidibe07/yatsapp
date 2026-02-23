import { userInterface } from "@/interface_and_type/user";
import { InputButtonGroup } from "./components/searchInput";
import UserIcon from "./components/userIcon";

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
