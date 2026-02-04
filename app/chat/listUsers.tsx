import { InputButtonGroup } from "./components/searchInput";
import UserIcon from "./components/userIcon";

export default function ListUsers() {
    return (
        <div>
            <div className="flex flex-col">
                <div className=" pb-5 border-b-2 px-2 h-25">
                    <InputButtonGroup />
                </div>

                <div className="p-2 overflow-y-scroll h-screen py-5  noScrollBar ">
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                    <UserIcon name="name" description="info" offlineTime="connecte il y a 12 H" />
                </div>
            </div>
        </div>
    );
}
