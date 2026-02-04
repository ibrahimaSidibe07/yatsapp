import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AudioLinesIcon, PlusIcon, Send } from "lucide-react";

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
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <InputGroupAddon align="inline-end">
                                <AudioLinesIcon />
                            </InputGroupAddon>
                        </TooltipTrigger>
                        <TooltipContent>Voice Mode</TooltipContent>
                    </Tooltip>
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
