import ListUsers from "./listUsers";
import TextPage from "./textPage";

export default function Page() {
    return (
        <div className="flex flex-row overflow-hidden ">
            <div className="w-[35%] h-screen  border-r-2 ">
                <ListUsers />
            </div>
            <div className="w-full  h-screen ">
                <TextPage />
            </div>
        </div>
    );
}
