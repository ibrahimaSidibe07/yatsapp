import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { InputGroup } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, Send } from "lucide-react";

export function ChatButton() {
    return (
        <ButtonGroup className="">
            <ButtonGroup>
                <Button variant="outline" size="icon">
                    <PlusIcon />
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <InputGroup className="w-150">
                    <Textarea />
                </InputGroup>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline" size="icon">
                    <Send />
                </Button>
            </ButtonGroup>
        </ButtonGroup>
    );
}
