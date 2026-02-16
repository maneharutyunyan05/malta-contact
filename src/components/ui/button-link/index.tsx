import {Button} from "@/components/shadcn-ui/button";
import NextLink from "next/link";
import {cn} from "@/lib/utils";

interface ButtonLinkProps {
    text?: string;
    href?: string;
    className?: string;
}

export function ButtonLink({
                               text = "Schedule a Meeting",
                               href = "#reach-out.json",
                               className = ""
                           }: ButtonLinkProps) {
    return (
        <Button asChild className={cn("bg-[#DD5757] hover:bg-[#DD5757]  text-lg w-fit ",
            className)}>
            <NextLink href={href}>{text}</NextLink>
        </Button>
    );
}