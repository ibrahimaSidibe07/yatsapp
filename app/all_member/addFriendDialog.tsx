import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import { userInterface } from "@/interface_and_type/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AddFriendDialog({ id, name, email, image }: userInterface) {
    const addFriend = async () => {};
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">ADD</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogDescription>{email}</DialogDescription>
                </DialogHeader>
                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 flex">
                    <Avatar className="h-28 w-28">
                        <AvatarImage src={`${image}`} />
                        <AvatarFallback>IS</AvatarFallback>
                    </Avatar>
                    <Button className="ml-auto my-auto">add </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
